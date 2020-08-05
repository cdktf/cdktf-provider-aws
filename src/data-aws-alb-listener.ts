// https://www.terraform.io/docs/providers/aws/r/data_aws_alb_listener.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "certificate_arn": {
        "type": "string",
        "computed": true
      },
      "default_action": {
        "type": [
          "list",
          [
            "object",
            {
              "authenticate_cognito": [
                "list",
                [
                  "object",
                  {
                    "authentication_request_extra_params": [
                      "map",
                      "string"
                    ],
                    "on_unauthenticated_request": "string",
                    "scope": "string",
                    "session_cookie_name": "string",
                    "session_timeout": "number",
                    "user_pool_arn": "string",
                    "user_pool_client_id": "string",
                    "user_pool_domain": "string"
                  }
                ]
              ],
              "authenticate_oidc": [
                "list",
                [
                  "object",
                  {
                    "authentication_request_extra_params": [
                      "map",
                      "string"
                    ],
                    "authorization_endpoint": "string",
                    "client_id": "string",
                    "client_secret": "string",
                    "issuer": "string",
                    "on_unauthenticated_request": "string",
                    "scope": "string",
                    "session_cookie_name": "string",
                    "session_timeout": "number",
                    "token_endpoint": "string",
                    "user_info_endpoint": "string"
                  }
                ]
              ],
              "fixed_response": [
                "list",
                [
                  "object",
                  {
                    "content_type": "string",
                    "message_body": "string",
                    "status_code": "string"
                  }
                ]
              ],
              "order": "number",
              "redirect": [
                "list",
                [
                  "object",
                  {
                    "host": "string",
                    "path": "string",
                    "port": "string",
                    "protocol": "string",
                    "query": "string",
                    "status_code": "string"
                  }
                ]
              ],
              "target_group_arn": "string",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "protocol": {
        "type": "string",
        "computed": true
      },
      "ssl_policy": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsAlbListenerConfig extends TerraformMetaArguments {
  readonly loadBalancerArn?: string;
  readonly port?: number;
}
export class DataAwsAlbListenerDefaultActionAuthenticateCognito extends ComplexComputedList {

  // authentication_request_extra_params - computed: true, optional: false, required: true
  public get authenticationRequestExtraParams() {
    return 'not implemented' as any;
  }

  // on_unauthenticated_request - computed: true, optional: false, required: true
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: true
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: true
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: true
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_pool_arn - computed: true, optional: false, required: true
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }

  // user_pool_client_id - computed: true, optional: false, required: true
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }

  // user_pool_domain - computed: true, optional: false, required: true
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
}
export class DataAwsAlbListenerDefaultActionAuthenticateOidc extends ComplexComputedList {

  // authentication_request_extra_params - computed: true, optional: false, required: true
  public get authenticationRequestExtraParams() {
    return 'not implemented' as any;
  }

  // authorization_endpoint - computed: true, optional: false, required: true
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_id - computed: true, optional: false, required: true
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: true
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // issuer - computed: true, optional: false, required: true
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // on_unauthenticated_request - computed: true, optional: false, required: true
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: true
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: true
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: true
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // token_endpoint - computed: true, optional: false, required: true
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // user_info_endpoint - computed: true, optional: false, required: true
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
}
export class DataAwsAlbListenerDefaultActionFixedResponse extends ComplexComputedList {

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // message_body - computed: true, optional: false, required: true
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // status_code - computed: true, optional: false, required: true
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export class DataAwsAlbListenerDefaultActionRedirect extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: true
  public get query() {
    return this.getStringAttribute('query');
  }

  // status_code - computed: true, optional: false, required: true
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export class DataAwsAlbListenerDefaultAction extends ComplexComputedList {

  // authenticate_cognito - computed: true, optional: false, required: true
  public get authenticateCognito() {
    return 'not implemented' as any;
  }

  // authenticate_oidc - computed: true, optional: false, required: true
  public get authenticateOidc() {
    return 'not implemented' as any;
  }

  // fixed_response - computed: true, optional: false, required: true
  public get fixedResponse() {
    return 'not implemented' as any;
  }

  // order - computed: true, optional: false, required: true
  public get order() {
    return this.getNumberAttribute('order');
  }

  // redirect - computed: true, optional: false, required: true
  public get redirect() {
    return 'not implemented' as any;
  }

  // target_group_arn - computed: true, optional: false, required: true
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}

// Resource

export class DataAwsAlbListener extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAlbListenerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_listener',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerArn = config.loadBalancerArn;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // certificate_arn - computed: true, optional: false, required: true
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // default_action - computed: true, optional: false, required: true
  public defaultAction(index: string) {
    return new DataAwsAlbListenerDefaultAction(this, 'default_action', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_arn - computed: true, optional: true, required: false
  private _loadBalancerArn?: string;
  public get loadBalancerArn() {
    return this._loadBalancerArn ?? this.getStringAttribute('load_balancer_arn');
  }
  public set loadBalancerArn(value: string | undefined) {
    this._loadBalancerArn = value;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port ?? this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // ssl_policy - computed: true, optional: false, required: true
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_arn: this._loadBalancerArn,
      port: this._port,
    };
  }
}
