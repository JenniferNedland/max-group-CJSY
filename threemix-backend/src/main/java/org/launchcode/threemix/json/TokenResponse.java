package org.launchcode.threemix.json;

public record TokenResponse(String access_token, String token_type, String scope, Integer expires_in,
                            String refresh_token) {
}