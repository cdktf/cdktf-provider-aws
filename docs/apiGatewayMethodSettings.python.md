# `apiGatewayMethodSettings` Submodule <a name="`apiGatewayMethodSettings` Submodule" id="@cdktf/provider-aws.apiGatewayMethodSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethodSettings <a name="ApiGatewayMethodSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings aws_api_gateway_method_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  method_path: str,
  rest_api_id: str,
  settings: ApiGatewayMethodSettingsSettings,
  stage_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.methodPath">method_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `method_path`<sup>Required</sup> <a name="method_path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.methodPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.stageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings"></a>

```python
def put_settings(
  cache_data_encrypted: typing.Union[bool, IResolvable] = None,
  cache_ttl_in_seconds: typing.Union[int, float] = None,
  caching_enabled: typing.Union[bool, IResolvable] = None,
  data_trace_enabled: typing.Union[bool, IResolvable] = None,
  logging_level: str = None,
  metrics_enabled: typing.Union[bool, IResolvable] = None,
  require_authorization_for_cache_control: typing.Union[bool, IResolvable] = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None,
  unauthorized_cache_control_header_strategy: str = None
) -> None
```

###### `cache_data_encrypted`<sup>Optional</sup> <a name="cache_data_encrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.cacheDataEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}.

---

###### `cache_ttl_in_seconds`<sup>Optional</sup> <a name="cache_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.cacheTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}.

---

###### `caching_enabled`<sup>Optional</sup> <a name="caching_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.cachingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}.

---

###### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.dataTraceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}.

---

###### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.loggingLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}.

---

###### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.metricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}.

---

###### `require_authorization_for_cache_control`<sup>Optional</sup> <a name="require_authorization_for_cache_control" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.requireAuthorizationForCacheControl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}.

---

###### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.throttlingBurstLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}.

---

###### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.throttlingRateLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}.

---

###### `unauthorized_cache_control_header_strategy`<sup>Optional</sup> <a name="unauthorized_cache_control_header_strategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.putSettings.parameter.unauthorizedCacheControlHeaderStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput">method_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput">settings_input</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput">stage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath">method_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settings"></a>

```python
settings: ApiGatewayMethodSettingsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference">ApiGatewayMethodSettingsSettingsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `method_path_input`<sup>Optional</sup> <a name="method_path_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPathInput"></a>

```python
method_path_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.settingsInput"></a>

```python
settings_input: ApiGatewayMethodSettingsSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---

##### `stage_name_input`<sup>Optional</sup> <a name="stage_name_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageNameInput"></a>

```python
stage_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `method_path`<sup>Required</sup> <a name="method_path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.methodPath"></a>

```python
method_path: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodSettingsConfig <a name="ApiGatewayMethodSettingsConfig" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  method_path: str,
  rest_api_id: str,
  settings: ApiGatewayMethodSettingsSettings,
  stage_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath">method_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `method_path`<sup>Required</sup> <a name="method_path" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.methodPath"></a>

```python
method_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.settings"></a>

```python
settings: ApiGatewayMethodSettingsSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#id ApiGatewayMethodSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayMethodSettingsSettings <a name="ApiGatewayMethodSettingsSettings" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings(
  cache_data_encrypted: typing.Union[bool, IResolvable] = None,
  cache_ttl_in_seconds: typing.Union[int, float] = None,
  caching_enabled: typing.Union[bool, IResolvable] = None,
  data_trace_enabled: typing.Union[bool, IResolvable] = None,
  logging_level: str = None,
  metrics_enabled: typing.Union[bool, IResolvable] = None,
  require_authorization_for_cache_control: typing.Union[bool, IResolvable] = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None,
  unauthorized_cache_control_header_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled">caching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled">metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl">require_authorization_for_cache_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy">unauthorized_cache_control_header_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}. |

---

##### `cache_data_encrypted`<sup>Optional</sup> <a name="cache_data_encrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}.

---

##### `cache_ttl_in_seconds`<sup>Optional</sup> <a name="cache_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}.

---

##### `caching_enabled`<sup>Optional</sup> <a name="caching_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.cachingEnabled"></a>

```python
caching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}.

---

##### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.dataTraceEnabled"></a>

```python
data_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}.

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}.

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.metricsEnabled"></a>

```python
metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}.

---

##### `require_authorization_for_cache_control`<sup>Optional</sup> <a name="require_authorization_for_cache_control" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.requireAuthorizationForCacheControl"></a>

```python
require_authorization_for_cache_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}.

---

##### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}.

---

##### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}.

---

##### `unauthorized_cache_control_header_strategy`<sup>Optional</sup> <a name="unauthorized_cache_control_header_strategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings.property.unauthorizedCacheControlHeaderStrategy"></a>

```python
unauthorized_cache_control_header_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayMethodSettingsSettingsOutputReference <a name="ApiGatewayMethodSettingsSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method_settings

apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted">reset_cache_data_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds">reset_cache_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled">reset_caching_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled">reset_data_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl">reset_require_authorization_for_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit">reset_throttling_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit">reset_throttling_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy">reset_unauthorized_cache_control_header_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_data_encrypted` <a name="reset_cache_data_encrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheDataEncrypted"></a>

```python
def reset_cache_data_encrypted() -> None
```

##### `reset_cache_ttl_in_seconds` <a name="reset_cache_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCacheTtlInSeconds"></a>

```python
def reset_cache_ttl_in_seconds() -> None
```

##### `reset_caching_enabled` <a name="reset_caching_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetCachingEnabled"></a>

```python
def reset_caching_enabled() -> None
```

##### `reset_data_trace_enabled` <a name="reset_data_trace_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetDataTraceEnabled"></a>

```python
def reset_data_trace_enabled() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_require_authorization_for_cache_control` <a name="reset_require_authorization_for_cache_control" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetRequireAuthorizationForCacheControl"></a>

```python
def reset_require_authorization_for_cache_control() -> None
```

##### `reset_throttling_burst_limit` <a name="reset_throttling_burst_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingBurstLimit"></a>

```python
def reset_throttling_burst_limit() -> None
```

##### `reset_throttling_rate_limit` <a name="reset_throttling_rate_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetThrottlingRateLimit"></a>

```python
def reset_throttling_rate_limit() -> None
```

##### `reset_unauthorized_cache_control_header_strategy` <a name="reset_unauthorized_cache_control_header_strategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.resetUnauthorizedCacheControlHeaderStrategy"></a>

```python
def reset_unauthorized_cache_control_header_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput">cache_data_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput">cache_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput">caching_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput">data_trace_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput">require_authorization_for_cache_control_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput">throttling_burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput">throttling_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput">unauthorized_cache_control_header_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted">cache_data_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds">cache_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled">caching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl">require_authorization_for_cache_control</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy">unauthorized_cache_control_header_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_data_encrypted_input`<sup>Optional</sup> <a name="cache_data_encrypted_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```python
cache_data_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_ttl_in_seconds_input`<sup>Optional</sup> <a name="cache_ttl_in_seconds_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```python
cache_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled_input`<sup>Optional</sup> <a name="caching_enabled_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabledInput"></a>

```python
caching_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_trace_enabled_input`<sup>Optional</sup> <a name="data_trace_enabled_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabledInput"></a>

```python
data_trace_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_authorization_for_cache_control_input`<sup>Optional</sup> <a name="require_authorization_for_cache_control_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControlInput"></a>

```python
require_authorization_for_cache_control_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttling_burst_limit_input`<sup>Optional</sup> <a name="throttling_burst_limit_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```python
throttling_burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit_input`<sup>Optional</sup> <a name="throttling_rate_limit_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimitInput"></a>

```python
throttling_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unauthorized_cache_control_header_strategy_input`<sup>Optional</sup> <a name="unauthorized_cache_control_header_strategy_input" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategyInput"></a>

```python
unauthorized_cache_control_header_strategy_input: str
```

- *Type:* str

---

##### `cache_data_encrypted`<sup>Required</sup> <a name="cache_data_encrypted" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheDataEncrypted"></a>

```python
cache_data_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_ttl_in_seconds`<sup>Required</sup> <a name="cache_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cacheTtlInSeconds"></a>

```python
cache_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `caching_enabled`<sup>Required</sup> <a name="caching_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.cachingEnabled"></a>

```python
caching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_authorization_for_cache_control`<sup>Required</sup> <a name="require_authorization_for_cache_control" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.requireAuthorizationForCacheControl"></a>

```python
require_authorization_for_cache_control: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unauthorized_cache_control_header_strategy`<sup>Required</sup> <a name="unauthorized_cache_control_header_strategy" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.unauthorizedCacheControlHeaderStrategy"></a>

```python
unauthorized_cache_control_header_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ApiGatewayMethodSettingsSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayMethodSettings.ApiGatewayMethodSettingsSettings">ApiGatewayMethodSettingsSettings</a>

---



