# `sagemakerWorkforce` Submodule <a name="`sagemakerWorkforce` Submodule" id="@cdktf/provider-aws.sagemakerWorkforce"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkforce <a name="SagemakerWorkforce" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce aws_sagemaker_workforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforce(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workforce_name: str,
  cognito_config: SagemakerWorkforceCognitoConfig = None,
  id: str = None,
  oidc_config: SagemakerWorkforceOidcConfig = None,
  source_ip_config: SagemakerWorkforceSourceIpConfig = None,
  workforce_vpc_config: SagemakerWorkforceWorkforceVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceName">workforce_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.sourceIpConfig">source_ip_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | source_ip_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceVpcConfig">workforce_vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | workforce_vpc_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workforce_name`<sup>Required</sup> <a name="workforce_name" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}.

---

##### `cognito_config`<sup>Optional</sup> <a name="cognito_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.cognitoConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

cognito_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc_config`<sup>Optional</sup> <a name="oidc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.oidcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `source_ip_config`<sup>Optional</sup> <a name="source_ip_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.sourceIpConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

source_ip_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `workforce_vpc_config`<sup>Optional</sup> <a name="workforce_vpc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.workforceVpcConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

workforce_vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig">put_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig">put_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig">put_source_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig">put_workforce_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig">reset_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig">reset_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig">reset_source_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig">reset_workforce_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cognito_config` <a name="put_cognito_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig"></a>

```python
def put_cognito_config(
  client_id: str,
  user_pool: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

###### `user_pool`<sup>Required</sup> <a name="user_pool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig.parameter.userPool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}.

---

##### `put_oidc_config` <a name="put_oidc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig"></a>

```python
def put_oidc_config(
  authorization_endpoint: str,
  client_id: str,
  client_secret: str,
  issuer: str,
  jwks_uri: str,
  logout_endpoint: str,
  token_endpoint: str,
  user_info_endpoint: str
) -> None
```

###### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}.

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}.

---

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}.

---

###### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.jwksUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}.

---

###### `logout_endpoint`<sup>Required</sup> <a name="logout_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.logoutEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}.

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.tokenEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}.

---

###### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.userInfoEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}.

---

##### `put_source_ip_config` <a name="put_source_ip_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig"></a>

```python
def put_source_ip_config(
  cidrs: typing.List[str]
) -> None
```

###### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig.parameter.cidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}.

---

##### `put_workforce_vpc_config` <a name="put_workforce_vpc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig"></a>

```python
def put_workforce_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None,
  vpc_id: str = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}.

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}.

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}.

---

##### `reset_cognito_config` <a name="reset_cognito_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig"></a>

```python
def reset_cognito_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oidc_config` <a name="reset_oidc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig"></a>

```python
def reset_oidc_config() -> None
```

##### `reset_source_ip_config` <a name="reset_source_ip_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig"></a>

```python
def reset_source_ip_config() -> None
```

##### `reset_workforce_vpc_config` <a name="reset_workforce_vpc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig"></a>

```python
def reset_workforce_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforce.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforce.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforce.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig">source_ip_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.subdomain">subdomain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig">workforce_vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput">cognito_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput">oidc_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput">source_ip_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput">workforce_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput">workforce_vpc_config_input</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceName">workforce_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cognito_config`<sup>Required</sup> <a name="cognito_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig"></a>

```python
cognito_config: SagemakerWorkforceCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a>

---

##### `oidc_config`<sup>Required</sup> <a name="oidc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig"></a>

```python
oidc_config: SagemakerWorkforceOidcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a>

---

##### `source_ip_config`<sup>Required</sup> <a name="source_ip_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig"></a>

```python
source_ip_config: SagemakerWorkforceSourceIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.subdomain"></a>

```python
subdomain: str
```

- *Type:* str

---

##### `workforce_vpc_config`<sup>Required</sup> <a name="workforce_vpc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig"></a>

```python
workforce_vpc_config: SagemakerWorkforceWorkforceVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a>

---

##### `cognito_config_input`<sup>Optional</sup> <a name="cognito_config_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput"></a>

```python
cognito_config_input: SagemakerWorkforceCognitoConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oidc_config_input`<sup>Optional</sup> <a name="oidc_config_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput"></a>

```python
oidc_config_input: SagemakerWorkforceOidcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `source_ip_config_input`<sup>Optional</sup> <a name="source_ip_config_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput"></a>

```python
source_ip_config_input: SagemakerWorkforceSourceIpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `workforce_name_input`<sup>Optional</sup> <a name="workforce_name_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput"></a>

```python
workforce_name_input: str
```

- *Type:* str

---

##### `workforce_vpc_config_input`<sup>Optional</sup> <a name="workforce_vpc_config_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput"></a>

```python
workforce_vpc_config_input: SagemakerWorkforceWorkforceVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `workforce_name`<sup>Required</sup> <a name="workforce_name" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceName"></a>

```python
workforce_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkforceCognitoConfig <a name="SagemakerWorkforceCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceCognitoConfig(
  client_id: str,
  user_pool: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool">user_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

##### `user_pool`<sup>Required</sup> <a name="user_pool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool"></a>

```python
user_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}.

---

### SagemakerWorkforceConfig <a name="SagemakerWorkforceConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workforce_name: str,
  cognito_config: SagemakerWorkforceCognitoConfig = None,
  id: str = None,
  oidc_config: SagemakerWorkforceOidcConfig = None,
  source_ip_config: SagemakerWorkforceSourceIpConfig = None,
  workforce_vpc_config: SagemakerWorkforceWorkforceVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName">workforce_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig">oidc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig">source_ip_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | source_ip_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig">workforce_vpc_config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | workforce_vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workforce_name`<sup>Required</sup> <a name="workforce_name" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName"></a>

```python
workforce_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}.

---

##### `cognito_config`<sup>Optional</sup> <a name="cognito_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig"></a>

```python
cognito_config: SagemakerWorkforceCognitoConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

cognito_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc_config`<sup>Optional</sup> <a name="oidc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig"></a>

```python
oidc_config: SagemakerWorkforceOidcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `source_ip_config`<sup>Optional</sup> <a name="source_ip_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig"></a>

```python
source_ip_config: SagemakerWorkforceSourceIpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

source_ip_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `workforce_vpc_config`<sup>Optional</sup> <a name="workforce_vpc_config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig"></a>

```python
workforce_vpc_config: SagemakerWorkforceWorkforceVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

workforce_vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

### SagemakerWorkforceOidcConfig <a name="SagemakerWorkforceOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceOidcConfig(
  authorization_endpoint: str,
  client_id: str,
  client_secret: str,
  issuer: str,
  jwks_uri: str,
  logout_endpoint: str,
  token_endpoint: str,
  user_info_endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri">jwks_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint">logout_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}. |

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}.

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}.

---

##### `logout_endpoint`<sup>Required</sup> <a name="logout_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint"></a>

```python
logout_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}.

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}.

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}.

---

### SagemakerWorkforceSourceIpConfig <a name="SagemakerWorkforceSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceSourceIpConfig(
  cidrs: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}. |

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}.

---

### SagemakerWorkforceWorkforceVpcConfig <a name="SagemakerWorkforceWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkforceCognitoConfigOutputReference <a name="SagemakerWorkforceCognitoConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput">user_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool">user_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `user_pool_input`<sup>Optional</sup> <a name="user_pool_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput"></a>

```python
user_pool_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `user_pool`<sup>Required</sup> <a name="user_pool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool"></a>

```python
user_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerWorkforceCognitoConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---


### SagemakerWorkforceOidcConfigOutputReference <a name="SagemakerWorkforceOidcConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput">jwks_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput">logout_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint">logout_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jwks_uri_input`<sup>Optional</sup> <a name="jwks_uri_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput"></a>

```python
jwks_uri_input: str
```

- *Type:* str

---

##### `logout_endpoint_input`<sup>Optional</sup> <a name="logout_endpoint_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput"></a>

```python
logout_endpoint_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `logout_endpoint`<sup>Required</sup> <a name="logout_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint"></a>

```python
logout_endpoint: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerWorkforceOidcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---


### SagemakerWorkforceSourceIpConfigOutputReference <a name="SagemakerWorkforceSourceIpConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput">cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidrs_input`<sup>Optional</sup> <a name="cidrs_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput"></a>

```python
cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerWorkforceSourceIpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---


### SagemakerWorkforceWorkforceVpcConfigOutputReference <a name="SagemakerWorkforceWorkforceVpcConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sagemaker_workforce

sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: SagemakerWorkforceWorkforceVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---



