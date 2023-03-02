# `cloudfrontResponseHeadersPolicy` Submodule <a name="`cloudfrontResponseHeadersPolicy` Submodule" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontResponseHeadersPolicy <a name="CloudfrontResponseHeadersPolicy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  comment: str = None,
  cors_config: CloudfrontResponseHeadersPolicyCorsConfig = None,
  custom_headers_config: CloudfrontResponseHeadersPolicyCustomHeadersConfig = None,
  etag: str = None,
  id: str = None,
  security_headers_config: CloudfrontResponseHeadersPolicySecurityHeadersConfig = None,
  server_timing_headers_config: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.corsConfig">cors_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a></code> | cors_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.customHeadersConfig">custom_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a></code> | custom_headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#etag CloudfrontResponseHeadersPolicy#etag}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#id CloudfrontResponseHeadersPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.securityHeadersConfig">security_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a></code> | security_headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.serverTimingHeadersConfig">server_timing_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a></code> | server_timing_headers_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}.

---

##### `cors_config`<sup>Optional</sup> <a name="cors_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.corsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a>

cors_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#cors_config CloudfrontResponseHeadersPolicy#cors_config}

---

##### `custom_headers_config`<sup>Optional</sup> <a name="custom_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.customHeadersConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a>

custom_headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#etag CloudfrontResponseHeadersPolicy#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#id CloudfrontResponseHeadersPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_headers_config`<sup>Optional</sup> <a name="security_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.securityHeadersConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a>

security_headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}

---

##### `server_timing_headers_config`<sup>Optional</sup> <a name="server_timing_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.serverTimingHeadersConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a>

server_timing_headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#server_timing_headers_config CloudfrontResponseHeadersPolicy#server_timing_headers_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig">put_cors_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCustomHeadersConfig">put_custom_headers_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig">put_security_headers_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putServerTimingHeadersConfig">put_server_timing_headers_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetCorsConfig">reset_cors_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetCustomHeadersConfig">reset_custom_headers_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetSecurityHeadersConfig">reset_security_headers_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetServerTimingHeadersConfig">reset_server_timing_headers_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cors_config` <a name="put_cors_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig"></a>

```python
def put_cors_config(
  access_control_allow_credentials: typing.Union[bool, IResolvable],
  access_control_allow_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders,
  access_control_allow_methods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods,
  access_control_allow_origins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins,
  origin_override: typing.Union[bool, IResolvable],
  access_control_expose_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = None,
  access_control_max_age_sec: typing.Union[int, float] = None
) -> None
```

###### `access_control_allow_credentials`<sup>Required</sup> <a name="access_control_allow_credentials" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.accessControlAllowCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}.

---

###### `access_control_allow_headers`<sup>Required</sup> <a name="access_control_allow_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.accessControlAllowHeaders"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a>

access_control_allow_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}

---

###### `access_control_allow_methods`<sup>Required</sup> <a name="access_control_allow_methods" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.accessControlAllowMethods"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a>

access_control_allow_methods block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}

---

###### `access_control_allow_origins`<sup>Required</sup> <a name="access_control_allow_origins" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.accessControlAllowOrigins"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a>

access_control_allow_origins block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}

---

###### `origin_override`<sup>Required</sup> <a name="origin_override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.originOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}.

---

###### `access_control_expose_headers`<sup>Optional</sup> <a name="access_control_expose_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.accessControlExposeHeaders"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a>

access_control_expose_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}

---

###### `access_control_max_age_sec`<sup>Optional</sup> <a name="access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCorsConfig.parameter.accessControlMaxAgeSec"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}.

---

##### `put_custom_headers_config` <a name="put_custom_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCustomHeadersConfig"></a>

```python
def put_custom_headers_config(
  items: typing.Union[IResolvable, typing.List[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putCustomHeadersConfig.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

##### `put_security_headers_config` <a name="put_security_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig"></a>

```python
def put_security_headers_config(
  content_security_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = None,
  content_type_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = None,
  frame_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = None,
  referrer_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = None,
  strict_transport_security: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = None,
  xss_protection: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = None
) -> None
```

###### `content_security_policy`<sup>Optional</sup> <a name="content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig.parameter.contentSecurityPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a>

content_security_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}

---

###### `content_type_options`<sup>Optional</sup> <a name="content_type_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig.parameter.contentTypeOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a>

content_type_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}

---

###### `frame_options`<sup>Optional</sup> <a name="frame_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig.parameter.frameOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a>

frame_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_options CloudfrontResponseHeadersPolicy#frame_options}

---

###### `referrer_policy`<sup>Optional</sup> <a name="referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig.parameter.referrerPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a>

referrer_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}

---

###### `strict_transport_security`<sup>Optional</sup> <a name="strict_transport_security" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig.parameter.strictTransportSecurity"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a>

strict_transport_security block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}

---

###### `xss_protection`<sup>Optional</sup> <a name="xss_protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putSecurityHeadersConfig.parameter.xssProtection"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a>

xss_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}

---

##### `put_server_timing_headers_config` <a name="put_server_timing_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putServerTimingHeadersConfig"></a>

```python
def put_server_timing_headers_config(
  enabled: typing.Union[bool, IResolvable],
  sampling_rate: typing.Union[int, float]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putServerTimingHeadersConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}.

---

###### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putServerTimingHeadersConfig.parameter.samplingRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_cors_config` <a name="reset_cors_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetCorsConfig"></a>

```python
def reset_cors_config() -> None
```

##### `reset_custom_headers_config` <a name="reset_custom_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetCustomHeadersConfig"></a>

```python
def reset_custom_headers_config() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_headers_config` <a name="reset_security_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetSecurityHeadersConfig"></a>

```python
def reset_security_headers_config() -> None
```

##### `reset_server_timing_headers_config` <a name="reset_server_timing_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetServerTimingHeadersConfig"></a>

```python
def reset_server_timing_headers_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.corsConfig">cors_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference">CloudfrontResponseHeadersPolicyCorsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.customHeadersConfig">custom_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.securityHeadersConfig">security_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.serverTimingHeadersConfig">server_timing_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.corsConfigInput">cors_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.customHeadersConfigInput">custom_headers_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.securityHeadersConfigInput">security_headers_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.serverTimingHeadersConfigInput">server_timing_headers_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cors_config`<sup>Required</sup> <a name="cors_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.corsConfig"></a>

```python
cors_config: CloudfrontResponseHeadersPolicyCorsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference">CloudfrontResponseHeadersPolicyCorsConfigOutputReference</a>

---

##### `custom_headers_config`<sup>Required</sup> <a name="custom_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.customHeadersConfig"></a>

```python
custom_headers_config: CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference</a>

---

##### `security_headers_config`<sup>Required</sup> <a name="security_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.securityHeadersConfig"></a>

```python
security_headers_config: CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference</a>

---

##### `server_timing_headers_config`<sup>Required</sup> <a name="server_timing_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.serverTimingHeadersConfig"></a>

```python
server_timing_headers_config: CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `cors_config_input`<sup>Optional</sup> <a name="cors_config_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.corsConfigInput"></a>

```python
cors_config_input: CloudfrontResponseHeadersPolicyCorsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a>

---

##### `custom_headers_config_input`<sup>Optional</sup> <a name="custom_headers_config_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.customHeadersConfigInput"></a>

```python
custom_headers_config_input: CloudfrontResponseHeadersPolicyCustomHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_headers_config_input`<sup>Optional</sup> <a name="security_headers_config_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.securityHeadersConfigInput"></a>

```python
security_headers_config_input: CloudfrontResponseHeadersPolicySecurityHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a>

---

##### `server_timing_headers_config_input`<sup>Optional</sup> <a name="server_timing_headers_config_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.serverTimingHeadersConfigInput"></a>

```python
server_timing_headers_config_input: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontResponseHeadersPolicyConfig <a name="CloudfrontResponseHeadersPolicyConfig" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  comment: str = None,
  cors_config: CloudfrontResponseHeadersPolicyCorsConfig = None,
  custom_headers_config: CloudfrontResponseHeadersPolicyCustomHeadersConfig = None,
  etag: str = None,
  id: str = None,
  security_headers_config: CloudfrontResponseHeadersPolicySecurityHeadersConfig = None,
  server_timing_headers_config: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.corsConfig">cors_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a></code> | cors_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.customHeadersConfig">custom_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a></code> | custom_headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#etag CloudfrontResponseHeadersPolicy#etag}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#id CloudfrontResponseHeadersPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.securityHeadersConfig">security_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a></code> | security_headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.serverTimingHeadersConfig">server_timing_headers_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a></code> | server_timing_headers_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}.

---

##### `cors_config`<sup>Optional</sup> <a name="cors_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.corsConfig"></a>

```python
cors_config: CloudfrontResponseHeadersPolicyCorsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a>

cors_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#cors_config CloudfrontResponseHeadersPolicy#cors_config}

---

##### `custom_headers_config`<sup>Optional</sup> <a name="custom_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.customHeadersConfig"></a>

```python
custom_headers_config: CloudfrontResponseHeadersPolicyCustomHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a>

custom_headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#etag CloudfrontResponseHeadersPolicy#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#id CloudfrontResponseHeadersPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_headers_config`<sup>Optional</sup> <a name="security_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.securityHeadersConfig"></a>

```python
security_headers_config: CloudfrontResponseHeadersPolicySecurityHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a>

security_headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}

---

##### `server_timing_headers_config`<sup>Optional</sup> <a name="server_timing_headers_config" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.serverTimingHeadersConfig"></a>

```python
server_timing_headers_config: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a>

server_timing_headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#server_timing_headers_config CloudfrontResponseHeadersPolicy#server_timing_headers_config}

---

### CloudfrontResponseHeadersPolicyCorsConfig <a name="CloudfrontResponseHeadersPolicyCorsConfig" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig(
  access_control_allow_credentials: typing.Union[bool, IResolvable],
  access_control_allow_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders,
  access_control_allow_methods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods,
  access_control_allow_origins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins,
  origin_override: typing.Union[bool, IResolvable],
  access_control_expose_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = None,
  access_control_max_age_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowCredentials">access_control_allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowHeaders">access_control_allow_headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a></code> | access_control_allow_headers block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowMethods">access_control_allow_methods</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a></code> | access_control_allow_methods block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowOrigins">access_control_allow_origins</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a></code> | access_control_allow_origins block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.originOverride">origin_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlExposeHeaders">access_control_expose_headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a></code> | access_control_expose_headers block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlMaxAgeSec">access_control_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}. |

---

##### `access_control_allow_credentials`<sup>Required</sup> <a name="access_control_allow_credentials" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowCredentials"></a>

```python
access_control_allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}.

---

##### `access_control_allow_headers`<sup>Required</sup> <a name="access_control_allow_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowHeaders"></a>

```python
access_control_allow_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a>

access_control_allow_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}

---

##### `access_control_allow_methods`<sup>Required</sup> <a name="access_control_allow_methods" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowMethods"></a>

```python
access_control_allow_methods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a>

access_control_allow_methods block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}

---

##### `access_control_allow_origins`<sup>Required</sup> <a name="access_control_allow_origins" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlAllowOrigins"></a>

```python
access_control_allow_origins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a>

access_control_allow_origins block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}

---

##### `origin_override`<sup>Required</sup> <a name="origin_override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.originOverride"></a>

```python
origin_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}.

---

##### `access_control_expose_headers`<sup>Optional</sup> <a name="access_control_expose_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlExposeHeaders"></a>

```python
access_control_expose_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a>

access_control_expose_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}

---

##### `access_control_max_age_sec`<sup>Optional</sup> <a name="access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig.property.accessControlMaxAgeSec"></a>

```python
access_control_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}.

---

### CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

### CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

### CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

### CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders(
  items: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

### CloudfrontResponseHeadersPolicyCustomHeadersConfig <a name="CloudfrontResponseHeadersPolicyCustomHeadersConfig" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig(
  items: typing.Union[IResolvable, typing.List[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyCustomHeadersConfigItems <a name="CloudfrontResponseHeadersPolicyCustomHeadersConfigItems" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems(
  header: str,
  override: typing.Union[bool, IResolvable],
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.property.header">header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#value CloudfrontResponseHeadersPolicy#value}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.property.header"></a>

```python
header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}.

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#value CloudfrontResponseHeadersPolicy#value}.

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfig <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfig" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig(
  content_security_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = None,
  content_type_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = None,
  frame_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = None,
  referrer_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = None,
  strict_transport_security: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = None,
  xss_protection: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.contentSecurityPolicy">content_security_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a></code> | content_security_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.contentTypeOptions">content_type_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a></code> | content_type_options block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.frameOptions">frame_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a></code> | frame_options block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.referrerPolicy">referrer_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a></code> | referrer_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.strictTransportSecurity">strict_transport_security</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a></code> | strict_transport_security block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.xssProtection">xss_protection</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a></code> | xss_protection block. |

---

##### `content_security_policy`<sup>Optional</sup> <a name="content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.contentSecurityPolicy"></a>

```python
content_security_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a>

content_security_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}

---

##### `content_type_options`<sup>Optional</sup> <a name="content_type_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.contentTypeOptions"></a>

```python
content_type_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a>

content_type_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}

---

##### `frame_options`<sup>Optional</sup> <a name="frame_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.frameOptions"></a>

```python
frame_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a>

frame_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_options CloudfrontResponseHeadersPolicy#frame_options}

---

##### `referrer_policy`<sup>Optional</sup> <a name="referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.referrerPolicy"></a>

```python
referrer_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a>

referrer_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}

---

##### `strict_transport_security`<sup>Optional</sup> <a name="strict_transport_security" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.strictTransportSecurity"></a>

```python
strict_transport_security: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a>

strict_transport_security block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}

---

##### `xss_protection`<sup>Optional</sup> <a name="xss_protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig.property.xssProtection"></a>

```python
xss_protection: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a>

xss_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy(
  content_security_policy: str,
  override: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.property.contentSecurityPolicy">content_security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |

---

##### `content_security_policy`<sup>Required</sup> <a name="content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.property.contentSecurityPolicy"></a>

```python
content_security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}.

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions(
  override: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions(
  frame_option: str,
  override: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.property.frameOption">frame_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |

---

##### `frame_option`<sup>Required</sup> <a name="frame_option" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.property.frameOption"></a>

```python
frame_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}.

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy(
  override: typing.Union[bool, IResolvable],
  referrer_policy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.property.referrerPolicy">referrer_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}. |

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `referrer_policy`<sup>Required</sup> <a name="referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy.property.referrerPolicy"></a>

```python
referrer_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}.

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity(
  access_control_max_age_sec: typing.Union[int, float],
  override: typing.Union[bool, IResolvable],
  include_subdomains: typing.Union[bool, IResolvable] = None,
  preload: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.accessControlMaxAgeSec">access_control_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.includeSubdomains">include_subdomains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.preload">preload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}. |

---

##### `access_control_max_age_sec`<sup>Required</sup> <a name="access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.accessControlMaxAgeSec"></a>

```python
access_control_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}.

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `include_subdomains`<sup>Optional</sup> <a name="include_subdomains" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.includeSubdomains"></a>

```python
include_subdomains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}.

---

##### `preload`<sup>Optional</sup> <a name="preload" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity.property.preload"></a>

```python
preload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}.

---

### CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection(
  override: typing.Union[bool, IResolvable],
  protection: typing.Union[bool, IResolvable],
  mode_block: typing.Union[bool, IResolvable] = None,
  report_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.protection">protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.modeBlock">mode_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.reportUri">report_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}. |

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `protection`<sup>Required</sup> <a name="protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.protection"></a>

```python
protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}.

---

##### `mode_block`<sup>Optional</sup> <a name="mode_block" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.modeBlock"></a>

```python
mode_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}.

---

##### `report_uri`<sup>Optional</sup> <a name="report_uri" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}.

---

### CloudfrontResponseHeadersPolicyServerTimingHeadersConfig <a name="CloudfrontResponseHeadersPolicyServerTimingHeadersConfig" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig(
  enabled: typing.Union[bool, IResolvable],
  sampling_rate: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}.

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a>

---


### CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a>

---


### CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a>

---


### CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference <a name="CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a>

---


### CloudfrontResponseHeadersPolicyCorsConfigOutputReference <a name="CloudfrontResponseHeadersPolicyCorsConfigOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowHeaders">put_access_control_allow_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowMethods">put_access_control_allow_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowOrigins">put_access_control_allow_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlExposeHeaders">put_access_control_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resetAccessControlExposeHeaders">reset_access_control_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resetAccessControlMaxAgeSec">reset_access_control_max_age_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_control_allow_headers` <a name="put_access_control_allow_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowHeaders"></a>

```python
def put_access_control_allow_headers(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowHeaders.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

##### `put_access_control_allow_methods` <a name="put_access_control_allow_methods" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowMethods"></a>

```python
def put_access_control_allow_methods(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowMethods.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

##### `put_access_control_allow_origins` <a name="put_access_control_allow_origins" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowOrigins"></a>

```python
def put_access_control_allow_origins(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlAllowOrigins.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

##### `put_access_control_expose_headers` <a name="put_access_control_expose_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlExposeHeaders"></a>

```python
def put_access_control_expose_headers(
  items: typing.List[str] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.putAccessControlExposeHeaders.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}.

---

##### `reset_access_control_expose_headers` <a name="reset_access_control_expose_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resetAccessControlExposeHeaders"></a>

```python
def reset_access_control_expose_headers() -> None
```

##### `reset_access_control_max_age_sec` <a name="reset_access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.resetAccessControlMaxAgeSec"></a>

```python
def reset_access_control_max_age_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowHeaders">access_control_allow_headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowMethods">access_control_allow_methods</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowOrigins">access_control_allow_origins</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlExposeHeaders">access_control_expose_headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowCredentialsInput">access_control_allow_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowHeadersInput">access_control_allow_headers_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowMethodsInput">access_control_allow_methods_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowOriginsInput">access_control_allow_origins_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlExposeHeadersInput">access_control_expose_headers_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlMaxAgeSecInput">access_control_max_age_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.originOverrideInput">origin_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowCredentials">access_control_allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlMaxAgeSec">access_control_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.originOverride">origin_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_allow_headers`<sup>Required</sup> <a name="access_control_allow_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowHeaders"></a>

```python
access_control_allow_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference</a>

---

##### `access_control_allow_methods`<sup>Required</sup> <a name="access_control_allow_methods" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowMethods"></a>

```python
access_control_allow_methods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference</a>

---

##### `access_control_allow_origins`<sup>Required</sup> <a name="access_control_allow_origins" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowOrigins"></a>

```python
access_control_allow_origins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference</a>

---

##### `access_control_expose_headers`<sup>Required</sup> <a name="access_control_expose_headers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlExposeHeaders"></a>

```python
access_control_expose_headers: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference</a>

---

##### `access_control_allow_credentials_input`<sup>Optional</sup> <a name="access_control_allow_credentials_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowCredentialsInput"></a>

```python
access_control_allow_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_control_allow_headers_input`<sup>Optional</sup> <a name="access_control_allow_headers_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowHeadersInput"></a>

```python
access_control_allow_headers_input: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders</a>

---

##### `access_control_allow_methods_input`<sup>Optional</sup> <a name="access_control_allow_methods_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowMethodsInput"></a>

```python
access_control_allow_methods_input: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods</a>

---

##### `access_control_allow_origins_input`<sup>Optional</sup> <a name="access_control_allow_origins_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowOriginsInput"></a>

```python
access_control_allow_origins_input: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins</a>

---

##### `access_control_expose_headers_input`<sup>Optional</sup> <a name="access_control_expose_headers_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlExposeHeadersInput"></a>

```python
access_control_expose_headers_input: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders</a>

---

##### `access_control_max_age_sec_input`<sup>Optional</sup> <a name="access_control_max_age_sec_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlMaxAgeSecInput"></a>

```python
access_control_max_age_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_override_input`<sup>Optional</sup> <a name="origin_override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.originOverrideInput"></a>

```python
origin_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_control_allow_credentials`<sup>Required</sup> <a name="access_control_allow_credentials" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlAllowCredentials"></a>

```python
access_control_allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_control_max_age_sec`<sup>Required</sup> <a name="access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.accessControlMaxAgeSec"></a>

```python
access_control_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_override`<sup>Required</sup> <a name="origin_override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.originOverride"></a>

```python
origin_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyCorsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCorsConfig">CloudfrontResponseHeadersPolicyCorsConfig</a>

---


### CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList <a name="CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]

---


### CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference <a name="CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>, cdktf.IResolvable]

---


### CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]

---

##### `reset_items` <a name="reset_items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList">CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.items"></a>

```python
items: CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList">CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[CloudfrontResponseHeadersPolicyCustomHeadersConfigItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigItems">CloudfrontResponseHeadersPolicyCustomHeadersConfigItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyCustomHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyCustomHeadersConfig">CloudfrontResponseHeadersPolicyCustomHeadersConfig</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicyInput">content_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicy">content_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_security_policy_input`<sup>Optional</sup> <a name="content_security_policy_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicyInput"></a>

```python
content_security_policy_input: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `content_security_policy`<sup>Required</sup> <a name="content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicy"></a>

```python
content_security_policy: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.frameOptionInput">frame_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.frameOption">frame_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frame_option_input`<sup>Optional</sup> <a name="frame_option_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.frameOptionInput"></a>

```python
frame_option_input: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frame_option`<sup>Required</sup> <a name="frame_option" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.frameOption"></a>

```python
frame_option: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentSecurityPolicy">put_content_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentTypeOptions">put_content_type_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putFrameOptions">put_frame_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putReferrerPolicy">put_referrer_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putStrictTransportSecurity">put_strict_transport_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putXssProtection">put_xss_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetContentSecurityPolicy">reset_content_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetContentTypeOptions">reset_content_type_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetFrameOptions">reset_frame_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetReferrerPolicy">reset_referrer_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetStrictTransportSecurity">reset_strict_transport_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetXssProtection">reset_xss_protection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_content_security_policy` <a name="put_content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentSecurityPolicy"></a>

```python
def put_content_security_policy(
  content_security_policy: str,
  override: typing.Union[bool, IResolvable]
) -> None
```

###### `content_security_policy`<sup>Required</sup> <a name="content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentSecurityPolicy.parameter.contentSecurityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}.

---

###### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentSecurityPolicy.parameter.override"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `put_content_type_options` <a name="put_content_type_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentTypeOptions"></a>

```python
def put_content_type_options(
  override: typing.Union[bool, IResolvable]
) -> None
```

###### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putContentTypeOptions.parameter.override"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `put_frame_options` <a name="put_frame_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putFrameOptions"></a>

```python
def put_frame_options(
  frame_option: str,
  override: typing.Union[bool, IResolvable]
) -> None
```

###### `frame_option`<sup>Required</sup> <a name="frame_option" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putFrameOptions.parameter.frameOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}.

---

###### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putFrameOptions.parameter.override"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

##### `put_referrer_policy` <a name="put_referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putReferrerPolicy"></a>

```python
def put_referrer_policy(
  override: typing.Union[bool, IResolvable],
  referrer_policy: str
) -> None
```

###### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putReferrerPolicy.parameter.override"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

###### `referrer_policy`<sup>Required</sup> <a name="referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putReferrerPolicy.parameter.referrerPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}.

---

##### `put_strict_transport_security` <a name="put_strict_transport_security" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putStrictTransportSecurity"></a>

```python
def put_strict_transport_security(
  access_control_max_age_sec: typing.Union[int, float],
  override: typing.Union[bool, IResolvable],
  include_subdomains: typing.Union[bool, IResolvable] = None,
  preload: typing.Union[bool, IResolvable] = None
) -> None
```

###### `access_control_max_age_sec`<sup>Required</sup> <a name="access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putStrictTransportSecurity.parameter.accessControlMaxAgeSec"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}.

---

###### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putStrictTransportSecurity.parameter.override"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

###### `include_subdomains`<sup>Optional</sup> <a name="include_subdomains" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putStrictTransportSecurity.parameter.includeSubdomains"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}.

---

###### `preload`<sup>Optional</sup> <a name="preload" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putStrictTransportSecurity.parameter.preload"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}.

---

##### `put_xss_protection` <a name="put_xss_protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putXssProtection"></a>

```python
def put_xss_protection(
  override: typing.Union[bool, IResolvable],
  protection: typing.Union[bool, IResolvable],
  mode_block: typing.Union[bool, IResolvable] = None,
  report_uri: str = None
) -> None
```

###### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putXssProtection.parameter.override"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}.

---

###### `protection`<sup>Required</sup> <a name="protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putXssProtection.parameter.protection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}.

---

###### `mode_block`<sup>Optional</sup> <a name="mode_block" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putXssProtection.parameter.modeBlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}.

---

###### `report_uri`<sup>Optional</sup> <a name="report_uri" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.putXssProtection.parameter.reportUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}.

---

##### `reset_content_security_policy` <a name="reset_content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetContentSecurityPolicy"></a>

```python
def reset_content_security_policy() -> None
```

##### `reset_content_type_options` <a name="reset_content_type_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetContentTypeOptions"></a>

```python
def reset_content_type_options() -> None
```

##### `reset_frame_options` <a name="reset_frame_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetFrameOptions"></a>

```python
def reset_frame_options() -> None
```

##### `reset_referrer_policy` <a name="reset_referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetReferrerPolicy"></a>

```python
def reset_referrer_policy() -> None
```

##### `reset_strict_transport_security` <a name="reset_strict_transport_security" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetStrictTransportSecurity"></a>

```python
def reset_strict_transport_security() -> None
```

##### `reset_xss_protection` <a name="reset_xss_protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.resetXssProtection"></a>

```python
def reset_xss_protection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentSecurityPolicy">content_security_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentTypeOptions">content_type_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.frameOptions">frame_options</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.referrerPolicy">referrer_policy</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.strictTransportSecurity">strict_transport_security</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.xssProtection">xss_protection</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentSecurityPolicyInput">content_security_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentTypeOptionsInput">content_type_options_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.frameOptionsInput">frame_options_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.referrerPolicyInput">referrer_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.strictTransportSecurityInput">strict_transport_security_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.xssProtectionInput">xss_protection_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_security_policy`<sup>Required</sup> <a name="content_security_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentSecurityPolicy"></a>

```python
content_security_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference</a>

---

##### `content_type_options`<sup>Required</sup> <a name="content_type_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentTypeOptions"></a>

```python
content_type_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference</a>

---

##### `frame_options`<sup>Required</sup> <a name="frame_options" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.frameOptions"></a>

```python
frame_options: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference</a>

---

##### `referrer_policy`<sup>Required</sup> <a name="referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.referrerPolicy"></a>

```python
referrer_policy: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference</a>

---

##### `strict_transport_security`<sup>Required</sup> <a name="strict_transport_security" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.strictTransportSecurity"></a>

```python
strict_transport_security: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference</a>

---

##### `xss_protection`<sup>Required</sup> <a name="xss_protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.xssProtection"></a>

```python
xss_protection: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference</a>

---

##### `content_security_policy_input`<sup>Optional</sup> <a name="content_security_policy_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentSecurityPolicyInput"></a>

```python
content_security_policy_input: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy</a>

---

##### `content_type_options_input`<sup>Optional</sup> <a name="content_type_options_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.contentTypeOptionsInput"></a>

```python
content_type_options_input: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions</a>

---

##### `frame_options_input`<sup>Optional</sup> <a name="frame_options_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.frameOptionsInput"></a>

```python
frame_options_input: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions</a>

---

##### `referrer_policy_input`<sup>Optional</sup> <a name="referrer_policy_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.referrerPolicyInput"></a>

```python
referrer_policy_input: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a>

---

##### `strict_transport_security_input`<sup>Optional</sup> <a name="strict_transport_security_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.strictTransportSecurityInput"></a>

```python
strict_transport_security_input: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a>

---

##### `xss_protection_input`<sup>Optional</sup> <a name="xss_protection_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.xssProtectionInput"></a>

```python
xss_protection_input: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfig">CloudfrontResponseHeadersPolicySecurityHeadersConfig</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicyInput">referrer_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicy">referrer_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `referrer_policy_input`<sup>Optional</sup> <a name="referrer_policy_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicyInput"></a>

```python
referrer_policy_input: str
```

- *Type:* str

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `referrer_policy`<sup>Required</sup> <a name="referrer_policy" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicy"></a>

```python
referrer_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resetIncludeSubdomains">reset_include_subdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resetPreload">reset_preload</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_subdomains` <a name="reset_include_subdomains" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resetIncludeSubdomains"></a>

```python
def reset_include_subdomains() -> None
```

##### `reset_preload` <a name="reset_preload" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.resetPreload"></a>

```python
def reset_preload() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSecInput">access_control_max_age_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomainsInput">include_subdomains_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.preloadInput">preload_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSec">access_control_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomains">include_subdomains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.preload">preload</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_max_age_sec_input`<sup>Optional</sup> <a name="access_control_max_age_sec_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSecInput"></a>

```python
access_control_max_age_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_subdomains_input`<sup>Optional</sup> <a name="include_subdomains_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomainsInput"></a>

```python
include_subdomains_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preload_input`<sup>Optional</sup> <a name="preload_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.preloadInput"></a>

```python
preload_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_control_max_age_sec`<sup>Required</sup> <a name="access_control_max_age_sec" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSec"></a>

```python
access_control_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_subdomains`<sup>Required</sup> <a name="include_subdomains" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomains"></a>

```python
include_subdomains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preload`<sup>Required</sup> <a name="preload" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.preload"></a>

```python
preload: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity</a>

---


### CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference <a name="CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resetModeBlock">reset_mode_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resetReportUri">reset_report_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode_block` <a name="reset_mode_block" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resetModeBlock"></a>

```python
def reset_mode_block() -> None
```

##### `reset_report_uri` <a name="reset_report_uri" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.resetReportUri"></a>

```python
def reset_report_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.modeBlockInput">mode_block_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.overrideInput">override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.protectionInput">protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.reportUriInput">report_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.modeBlock">mode_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.override">override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.protection">protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.reportUri">report_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_block_input`<sup>Optional</sup> <a name="mode_block_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.modeBlockInput"></a>

```python
mode_block_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_input`<sup>Optional</sup> <a name="override_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.overrideInput"></a>

```python
override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protection_input`<sup>Optional</sup> <a name="protection_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.protectionInput"></a>

```python
protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `report_uri_input`<sup>Optional</sup> <a name="report_uri_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.reportUriInput"></a>

```python
report_uri_input: str
```

- *Type:* str

---

##### `mode_block`<sup>Required</sup> <a name="mode_block" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.modeBlock"></a>

```python
mode_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override`<sup>Required</sup> <a name="override" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.override"></a>

```python
override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `protection`<sup>Required</sup> <a name="protection" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.protection"></a>

```python
protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `report_uri`<sup>Required</sup> <a name="report_uri" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.reportUri"></a>

```python
report_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection</a>

---


### CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_response_headers_policy

cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.samplingRateInput">sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sampling_rate_input`<sup>Optional</sup> <a name="sampling_rate_input" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.samplingRateInput"></a>

```python
sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyServerTimingHeadersConfig</a>

---



