# `docdbClusterParameterGroup` Submodule <a name="`docdbClusterParameterGroup` Submodule" id="@cdktf/provider-aws.docdbClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbClusterParameterGroup <a name="DocdbClusterParameterGroup" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group aws_docdb_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroup(
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
  parameter: typing.Union[IResolvable, typing.List[DocdbClusterParameterGroupParameter]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.family"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.parameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#parameter DocdbClusterParameterGroup#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.putParameter">put_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_parameter` <a name="put_parameter" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.putParameter"></a>

```python
def put_parameter(
  value: typing.Union[IResolvable, typing.List[DocdbClusterParameterGroupParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.putParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList">DocdbClusterParameterGroupParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameterInput">parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameter"></a>

```python
parameter: DocdbClusterParameterGroupParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList">DocdbClusterParameterGroupParameterList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.parameterInput"></a>

```python
parameter_input: typing.Union[IResolvable, typing.List[DocdbClusterParameterGroupParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterParameterGroupConfig <a name="DocdbClusterParameterGroupConfig" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroupConfig(
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
  parameter: typing.Union[IResolvable, typing.List[DocdbClusterParameterGroupParameter]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.parameter">parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.family"></a>

```python
family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.parameter"></a>

```python
parameter: typing.Union[IResolvable, typing.List[DocdbClusterParameterGroupParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#parameter DocdbClusterParameterGroup#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}.

---

### DocdbClusterParameterGroupParameter <a name="DocdbClusterParameterGroupParameter" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroupParameter(
  name: str,
  value: str,
  apply_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#value DocdbClusterParameterGroup#value}. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.applyMethod">apply_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#apply_method DocdbClusterParameterGroup#apply_method}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#value DocdbClusterParameterGroup#value}.

---

##### `apply_method`<sup>Optional</sup> <a name="apply_method" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter.property.applyMethod"></a>

```python
apply_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group#apply_method DocdbClusterParameterGroup#apply_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterParameterGroupParameterList <a name="DocdbClusterParameterGroupParameterList" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DocdbClusterParameterGroupParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DocdbClusterParameterGroupParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>]]

---


### DocdbClusterParameterGroupParameterOutputReference <a name="DocdbClusterParameterGroupParameterOutputReference" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import docdb_cluster_parameter_group

docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resetApplyMethod">reset_apply_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apply_method` <a name="reset_apply_method" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.resetApplyMethod"></a>

```python
def reset_apply_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethodInput">apply_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethod">apply_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_method_input`<sup>Optional</sup> <a name="apply_method_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethodInput"></a>

```python
apply_method_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `apply_method`<sup>Required</sup> <a name="apply_method" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.applyMethod"></a>

```python
apply_method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DocdbClusterParameterGroupParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.docdbClusterParameterGroup.DocdbClusterParameterGroupParameter">DocdbClusterParameterGroupParameter</a>, cdktf.IResolvable]

---



