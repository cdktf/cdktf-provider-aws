# `dataAwsEc2NetworkInsightsPath` Submodule <a name="`dataAwsEc2NetworkInsightsPath` Submodule" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2NetworkInsightsPath <a name="DataAwsEc2NetworkInsightsPath" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path aws_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2NetworkInsightsPathFilter]] = None,
  id: str = None,
  network_insights_path_id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#id DataAwsEc2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.networkInsightsPathId">network_insights_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#network_insights_path_id DataAwsEc2NetworkInsightsPath#network_insights_path_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#tags DataAwsEc2NetworkInsightsPath#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#filter DataAwsEc2NetworkInsightsPath#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#id DataAwsEc2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_insights_path_id`<sup>Optional</sup> <a name="network_insights_path_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.networkInsightsPathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#network_insights_path_id DataAwsEc2NetworkInsightsPath#network_insights_path_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#region DataAwsEc2NetworkInsightsPath#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#tags DataAwsEc2NetworkInsightsPath#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetNetworkInsightsPathId">reset_network_insights_path_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsEc2NetworkInsightsPathFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_insights_path_id` <a name="reset_network_insights_path_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetNetworkInsightsPathId"></a>

```python
def reset_network_insights_path_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEc2NetworkInsightsPath resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEc2NetworkInsightsPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEc2NetworkInsightsPath to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEc2NetworkInsightsPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2NetworkInsightsPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destinationIp">destination_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList">DataAwsEc2NetworkInsightsPathFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filterAtDestination">filter_at_destination</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList">DataAwsEc2NetworkInsightsPathFilterAtDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filterAtSource">filter_at_source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList">DataAwsEc2NetworkInsightsPathFilterAtSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.networkInsightsPathIdInput">network_insights_path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.networkInsightsPathId">network_insights_path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `destination_ip`<sup>Required</sup> <a name="destination_ip" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filter"></a>

```python
filter: DataAwsEc2NetworkInsightsPathFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList">DataAwsEc2NetworkInsightsPathFilterList</a>

---

##### `filter_at_destination`<sup>Required</sup> <a name="filter_at_destination" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filterAtDestination"></a>

```python
filter_at_destination: DataAwsEc2NetworkInsightsPathFilterAtDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList">DataAwsEc2NetworkInsightsPathFilterAtDestinationList</a>

---

##### `filter_at_source`<sup>Required</sup> <a name="filter_at_source" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filterAtSource"></a>

```python
filter_at_source: DataAwsEc2NetworkInsightsPathFilterAtSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList">DataAwsEc2NetworkInsightsPathFilterAtSourceList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsEc2NetworkInsightsPathFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_insights_path_id_input`<sup>Optional</sup> <a name="network_insights_path_id_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.networkInsightsPathIdInput"></a>

```python
network_insights_path_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_insights_path_id`<sup>Required</sup> <a name="network_insights_path_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.networkInsightsPathId"></a>

```python
network_insights_path_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPath.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2NetworkInsightsPathConfig <a name="DataAwsEc2NetworkInsightsPathConfig" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsEc2NetworkInsightsPathFilter]] = None,
  id: str = None,
  network_insights_path_id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#id DataAwsEc2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.networkInsightsPathId">network_insights_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#network_insights_path_id DataAwsEc2NetworkInsightsPath#network_insights_path_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#tags DataAwsEc2NetworkInsightsPath#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsEc2NetworkInsightsPathFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#filter DataAwsEc2NetworkInsightsPath#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#id DataAwsEc2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_insights_path_id`<sup>Optional</sup> <a name="network_insights_path_id" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.networkInsightsPathId"></a>

```python
network_insights_path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#network_insights_path_id DataAwsEc2NetworkInsightsPath#network_insights_path_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#region DataAwsEc2NetworkInsightsPath#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#tags DataAwsEc2NetworkInsightsPath#tags}.

---

### DataAwsEc2NetworkInsightsPathFilter <a name="DataAwsEc2NetworkInsightsPathFilter" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#name DataAwsEc2NetworkInsightsPath#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#values DataAwsEc2NetworkInsightsPath#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#name DataAwsEc2NetworkInsightsPath#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/data-sources/ec2_network_insights_path#values DataAwsEc2NetworkInsightsPath#values}.

---

### DataAwsEc2NetworkInsightsPathFilterAtDestination <a name="DataAwsEc2NetworkInsightsPathFilterAtDestination" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestination()
```


### DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange()
```


### DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange()
```


### DataAwsEc2NetworkInsightsPathFilterAtSource <a name="DataAwsEc2NetworkInsightsPathFilterAtSource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSource()
```


### DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange()
```


### DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange">DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange">DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---


### DataAwsEc2NetworkInsightsPathFilterAtDestinationList <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList">DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList">DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestination">DataAwsEc2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList">DataAwsEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeList</a>

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList">DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2NetworkInsightsPathFilterAtDestination
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestination">DataAwsEc2NetworkInsightsPathFilterAtDestination</a>

---


### DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange">DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange">DataAwsEc2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---


### DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange">DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange">DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---


### DataAwsEc2NetworkInsightsPathFilterAtSourceList <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList">DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList">DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSource">DataAwsEc2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList">DataAwsEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeList</a>

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList">DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2NetworkInsightsPathFilterAtSource
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSource">DataAwsEc2NetworkInsightsPathFilterAtSource</a>

---


### DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange">DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange">DataAwsEc2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---


### DataAwsEc2NetworkInsightsPathFilterList <a name="DataAwsEc2NetworkInsightsPathFilterList" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2NetworkInsightsPathFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsEc2NetworkInsightsPathFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]]

---


### DataAwsEc2NetworkInsightsPathFilterOutputReference <a name="DataAwsEc2NetworkInsightsPathFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_network_insights_path

dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsEc2NetworkInsightsPathFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsEc2NetworkInsightsPath.DataAwsEc2NetworkInsightsPathFilter">DataAwsEc2NetworkInsightsPathFilter</a>]

---



