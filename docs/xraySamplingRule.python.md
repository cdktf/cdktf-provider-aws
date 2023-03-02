# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktf/provider-aws.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule aws_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import xray_sampling_rule

xraySamplingRule.XraySamplingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fixed_rate: typing.Union[int, float],
  host: str,
  http_method: str,
  priority: typing.Union[int, float],
  reservoir_size: typing.Union[int, float],
  resource_arn: str,
  service_name: str,
  service_type: str,
  url_path: str,
  version: typing.Union[int, float],
  attributes: typing.Mapping[str] = None,
  id: str = None,
  rule_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.fixedRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}.

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.reservoirSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}.

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}.

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.urlPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import xray_sampling_rule

xraySamplingRule.XraySamplingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import xray_sampling_rule

xraySamplingRule.XraySamplingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import xray_sampling_rule

xraySamplingRule.XraySamplingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRateInput">fixed_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSizeInput">reservoir_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate_input`<sup>Optional</sup> <a name="fixed_rate_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRateInput"></a>

```python
fixed_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size_input`<sup>Optional</sup> <a name="reservoir_size_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSizeInput"></a>

```python
reservoir_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import xray_sampling_rule

xraySamplingRule.XraySamplingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fixed_rate: typing.Union[int, float],
  host: str,
  http_method: str,
  priority: typing.Union[int, float],
  reservoir_size: typing.Union[int, float],
  resource_arn: str,
  service_name: str,
  service_type: str,
  url_path: str,
  version: typing.Union[int, float],
  attributes: typing.Mapping[str] = None,
  id: str = None,
  rule_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}.

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}.

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}.

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}.

---



