# `rdsClusterParameterGroup` Submodule <a name="`rdsClusterParameterGroup` Submodule" id="@cdktf/provider-aws.rdsClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterParameterGroup <a name="RdsClusterParameterGroup" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group aws_rds_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  family: str,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  parameter: typing.Union[IResolvable, typing.List[RdsClusterParameterGroupParameter]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#family RdsClusterParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#description RdsClusterParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name_prefix RdsClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags RdsClusterParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.family"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#family RdsClusterParameterGroup#family}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#description RdsClusterParameterGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name_prefix RdsClusterParameterGroup#name_prefix}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#parameter RdsClusterParameterGroup#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags RdsClusterParameterGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[RdsClusterParameterGroupParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList">RdsClusterParameterGroupParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameter"></a>

```python
parameter: RdsClusterParameterGroupParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList">RdsClusterParameterGroupParameterList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[RdsClusterParameterGroupParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterParameterGroupConfig <a name="RdsClusterParameterGroupConfig" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  family: str,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  parameter: typing.Union[IResolvable, typing.List[RdsClusterParameterGroupParameter]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#family RdsClusterParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#description RdsClusterParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name_prefix RdsClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags RdsClusterParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.family"></a>

```python
family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#family RdsClusterParameterGroup#family}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#description RdsClusterParameterGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name_prefix RdsClusterParameterGroup#name_prefix}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[RdsClusterParameterGroupParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#parameter RdsClusterParameterGroup#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags RdsClusterParameterGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}.

---

### RdsClusterParameterGroupParameter <a name="RdsClusterParameterGroupParameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroupParameter(
  name: str,
  value: str,
  apply_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#value RdsClusterParameterGroup#value}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.applyMethod">apply_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#apply_method RdsClusterParameterGroup#apply_method}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#value RdsClusterParameterGroup#value}.

---

##### `apply_method`<sup>Optional</sup> <a name="apply_method" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.applyMethod"></a>

```python
apply_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group#apply_method RdsClusterParameterGroup#apply_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterParameterGroupParameterList <a name="RdsClusterParameterGroupParameterList" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroupParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsClusterParameterGroupParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RdsClusterParameterGroupParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>]]

---


### RdsClusterParameterGroupParameterOutputReference <a name="RdsClusterParameterGroupParameterOutputReference" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_cluster_parameter_group

rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resetApplyMethod">reset_apply_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apply_method` <a name="reset_apply_method" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resetApplyMethod"></a>

```python
def reset_apply_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethodInput">apply_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethod">apply_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_method_input`<sup>Optional</sup> <a name="apply_method_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethodInput"></a>

```python
apply_method_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `apply_method`<sup>Required</sup> <a name="apply_method" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethod"></a>

```python
apply_method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RdsClusterParameterGroupParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter">RdsClusterParameterGroupParameter</a>, cdktf.IResolvable]

---



