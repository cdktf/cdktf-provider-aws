# `apiGatewayUsagePlan` Submodule <a name="`apiGatewayUsagePlan` Submodule" id="@cdktf/provider-aws.apiGatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayUsagePlan <a name="ApiGatewayUsagePlan" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan aws_api_gateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlan(
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
  api_stages: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStages]] = None,
  description: str = None,
  id: str = None,
  product_code: str = None,
  quota_settings: ApiGatewayUsagePlanQuotaSettings = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  throttle_settings: ApiGatewayUsagePlanThrottleSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.apiStages">api_stages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]</code> | api_stages block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.productCode">product_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.quotaSettings">quota_settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.throttleSettings">throttle_settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `api_stages`<sup>Optional</sup> <a name="api_stages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.apiStages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]

api_stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `product_code`<sup>Optional</sup> <a name="product_code" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.productCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `quota_settings`<sup>Optional</sup> <a name="quota_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.quotaSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `throttle_settings`<sup>Optional</sup> <a name="throttle_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.throttleSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages">put_api_stages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings">put_quota_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings">put_throttle_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages">reset_api_stages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode">reset_product_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings">reset_quota_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings">reset_throttle_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_api_stages` <a name="put_api_stages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages"></a>

```python
def put_api_stages(
  value: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]

---

##### `put_quota_settings` <a name="put_quota_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings"></a>

```python
def put_quota_settings(
  limit: typing.Union[int, float],
  period: str,
  offset: typing.Union[int, float] = None
) -> None
```

###### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}.

---

###### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.period"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}.

---

###### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.offset"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}.

---

##### `put_throttle_settings` <a name="put_throttle_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings"></a>

```python
def put_throttle_settings(
  burst_limit: typing.Union[int, float] = None,
  rate_limit: typing.Union[int, float] = None
) -> None
```

###### `burst_limit`<sup>Optional</sup> <a name="burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings.parameter.burstLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

###### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings.parameter.rateLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

##### `reset_api_stages` <a name="reset_api_stages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages"></a>

```python
def reset_api_stages() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_product_code` <a name="reset_product_code" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode"></a>

```python
def reset_product_code() -> None
```

##### `reset_quota_settings` <a name="reset_quota_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings"></a>

```python
def reset_quota_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_throttle_settings` <a name="reset_throttle_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings"></a>

```python
def reset_throttle_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages">api_stages</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings">quota_settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings">throttle_settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput">api_stages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput">product_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput">quota_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput">throttle_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode">product_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_stages`<sup>Required</sup> <a name="api_stages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages"></a>

```python
api_stages: ApiGatewayUsagePlanApiStagesList
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `quota_settings`<sup>Required</sup> <a name="quota_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings"></a>

```python
quota_settings: ApiGatewayUsagePlanQuotaSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a>

---

##### `throttle_settings`<sup>Required</sup> <a name="throttle_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings"></a>

```python
throttle_settings: ApiGatewayUsagePlanThrottleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a>

---

##### `api_stages_input`<sup>Optional</sup> <a name="api_stages_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput"></a>

```python
api_stages_input: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_code_input`<sup>Optional</sup> <a name="product_code_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput"></a>

```python
product_code_input: str
```

- *Type:* str

---

##### `quota_settings_input`<sup>Optional</sup> <a name="quota_settings_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput"></a>

```python
quota_settings_input: ApiGatewayUsagePlanQuotaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throttle_settings_input`<sup>Optional</sup> <a name="throttle_settings_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput"></a>

```python
throttle_settings_input: ApiGatewayUsagePlanThrottleSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product_code`<sup>Required</sup> <a name="product_code" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode"></a>

```python
product_code: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayUsagePlanApiStages <a name="ApiGatewayUsagePlanApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages(
  api_id: str,
  stage: str,
  throttle: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStagesThrottle]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle">throttle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]</code> | throttle block. |

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle"></a>

```python
throttle: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStagesThrottle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]

throttle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle ApiGatewayUsagePlan#throttle}

---

### ApiGatewayUsagePlanApiStagesThrottle <a name="ApiGatewayUsagePlanApiStagesThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle(
  path: str,
  burst_limit: typing.Union[int, float] = None,
  rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}.

---

##### `burst_limit`<sup>Optional</sup> <a name="burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```python
burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

### ApiGatewayUsagePlanConfig <a name="ApiGatewayUsagePlanConfig" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  api_stages: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStages]] = None,
  description: str = None,
  id: str = None,
  product_code: str = None,
  quota_settings: ApiGatewayUsagePlanQuotaSettings = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  throttle_settings: ApiGatewayUsagePlanThrottleSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages">api_stages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]</code> | api_stages block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode">product_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings">quota_settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings">throttle_settings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `api_stages`<sup>Optional</sup> <a name="api_stages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages"></a>

```python
api_stages: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]

api_stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `product_code`<sup>Optional</sup> <a name="product_code" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode"></a>

```python
product_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `quota_settings`<sup>Optional</sup> <a name="quota_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings"></a>

```python
quota_settings: ApiGatewayUsagePlanQuotaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `throttle_settings`<sup>Optional</sup> <a name="throttle_settings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings"></a>

```python
throttle_settings: ApiGatewayUsagePlanThrottleSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

### ApiGatewayUsagePlanQuotaSettings <a name="ApiGatewayUsagePlanQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings(
  limit: typing.Union[int, float],
  period: str,
  offset: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}. |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period"></a>

```python
period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}.

---

### ApiGatewayUsagePlanThrottleSettings <a name="ApiGatewayUsagePlanThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings(
  burst_limit: typing.Union[int, float] = None,
  rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `burst_limit`<sup>Optional</sup> <a name="burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit"></a>

```python
burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayUsagePlanApiStagesList <a name="ApiGatewayUsagePlanApiStagesList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiGatewayUsagePlanApiStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>]]

---


### ApiGatewayUsagePlanApiStagesOutputReference <a name="ApiGatewayUsagePlanApiStagesOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle">put_throttle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle">reset_throttle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_throttle` <a name="put_throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```python
def put_throttle(
  value: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStagesThrottle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]

---

##### `reset_throttle` <a name="reset_throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```python
def reset_throttle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput">throttle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```python
throttle: ApiGatewayUsagePlanApiStagesThrottleList
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `throttle_input`<sup>Optional</sup> <a name="throttle_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```python
throttle_input: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStagesThrottle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiGatewayUsagePlanApiStages, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>, cdktf.IResolvable]

---


### ApiGatewayUsagePlanApiStagesThrottleList <a name="ApiGatewayUsagePlanApiStagesThrottleList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiGatewayUsagePlanApiStagesThrottleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiGatewayUsagePlanApiStagesThrottle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>]]

---


### ApiGatewayUsagePlanApiStagesThrottleOutputReference <a name="ApiGatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">reset_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">reset_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_burst_limit` <a name="reset_burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```python
def reset_burst_limit() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `burst_limit_input`<sup>Optional</sup> <a name="burst_limit_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```python
burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```python
rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `burst_limit`<sup>Required</sup> <a name="burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```python
burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApiGatewayUsagePlanApiStagesThrottle, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>, cdktf.IResolvable]

---


### ApiGatewayUsagePlanQuotaSettingsOutputReference <a name="ApiGatewayUsagePlanQuotaSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset">reset_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_offset` <a name="reset_offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset"></a>

```python
def reset_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput">offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset">offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_input`<sup>Optional</sup> <a name="offset_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput"></a>

```python
offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset"></a>

```python
offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ApiGatewayUsagePlanQuotaSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---


### ApiGatewayUsagePlanThrottleSettingsOutputReference <a name="ApiGatewayUsagePlanThrottleSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_usage_plan

apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit">reset_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit">reset_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_burst_limit` <a name="reset_burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit"></a>

```python
def reset_burst_limit() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput">burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput">rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `burst_limit_input`<sup>Optional</sup> <a name="burst_limit_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput"></a>

```python
burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput"></a>

```python
rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `burst_limit`<sup>Required</sup> <a name="burst_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit"></a>

```python
burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ApiGatewayUsagePlanThrottleSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---



