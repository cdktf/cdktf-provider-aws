# `dbOptionGroup` Submodule <a name="`dbOptionGroup` Submodule" id="@cdktf/provider-aws.dbOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbOptionGroup <a name="DbOptionGroup" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group aws_db_option_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine_name: str,
  major_engine_version: str,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  option: typing.Union[IResolvable, typing.List[DbOptionGroupOption]] = None,
  option_group_description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbOptionGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.engineName">engine_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.option">option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]</code> | option block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.optionGroupDescription">option_group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.engineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}.

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.majorEngineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}.

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.option"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]

option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option DbOptionGroup#option}

---

##### `option_group_description`<sup>Optional</sup> <a name="option_group_description" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.optionGroupDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#timeouts DbOptionGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption">put_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption">reset_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription">reset_option_group_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_option` <a name="put_option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption"></a>

```python
def put_option(
  value: typing.Union[IResolvable, typing.List[DbOptionGroupOption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putOption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_option` <a name="reset_option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOption"></a>

```python
def reset_option() -> None
```

##### `reset_option_group_description` <a name="reset_option_group_description" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetOptionGroupDescription"></a>

```python
def reset_option_group_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option">option</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput">engine_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput">major_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput">option_group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput">option_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName">engine_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription">option_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.option"></a>

```python
option: DbOptionGroupOptionList
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList">DbOptionGroupOptionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeouts"></a>

```python
timeouts: DbOptionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference">DbOptionGroupTimeoutsOutputReference</a>

---

##### `engine_name_input`<sup>Optional</sup> <a name="engine_name_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineNameInput"></a>

```python
engine_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `major_engine_version_input`<sup>Optional</sup> <a name="major_engine_version_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersionInput"></a>

```python
major_engine_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `option_group_description_input`<sup>Optional</sup> <a name="option_group_description_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescriptionInput"></a>

```python
option_group_description_input: str
```

- *Type:* str

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionInput"></a>

```python
option_input: typing.Union[IResolvable, typing.List[DbOptionGroupOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DbOptionGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>, cdktf.IResolvable]

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `option_group_description`<sup>Required</sup> <a name="option_group_description" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.optionGroupDescription"></a>

```python
option_group_description: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbOptionGroupConfig <a name="DbOptionGroupConfig" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine_name: str,
  major_engine_version: str,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  option: typing.Union[IResolvable, typing.List[DbOptionGroupOption]] = None,
  option_group_description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbOptionGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName">engine_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option">option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]</code> | option block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription">option_group_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#engine_name DbOptionGroup#engine_name}.

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#major_engine_version DbOptionGroup#major_engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#id DbOptionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name_prefix DbOptionGroup#name_prefix}.

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.option"></a>

```python
option: typing.Union[IResolvable, typing.List[DbOptionGroupOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]

option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option DbOptionGroup#option}

---

##### `option_group_description`<sup>Optional</sup> <a name="option_group_description" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.optionGroupDescription"></a>

```python
option_group_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_group_description DbOptionGroup#option_group_description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags DbOptionGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#tags_all DbOptionGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupConfig.property.timeouts"></a>

```python
timeouts: DbOptionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#timeouts DbOptionGroup#timeouts}

---

### DbOptionGroupOption <a name="DbOptionGroupOption" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupOption(
  option_name: str,
  db_security_group_memberships: typing.List[str] = None,
  option_settings: typing.Union[IResolvable, typing.List[DbOptionGroupOptionOptionSettings]] = None,
  port: typing.Union[int, float] = None,
  version: str = None,
  vpc_security_group_memberships: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName">option_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_name DbOptionGroup#option_name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships">db_security_group_memberships</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings">option_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]</code> | option_settings block. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#port DbOptionGroup#port}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#version DbOptionGroup#version}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships">vpc_security_group_memberships</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}. |

---

##### `option_name`<sup>Required</sup> <a name="option_name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_name DbOptionGroup#option_name}.

---

##### `db_security_group_memberships`<sup>Optional</sup> <a name="db_security_group_memberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.dbSecurityGroupMemberships"></a>

```python
db_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}.

---

##### `option_settings`<sup>Optional</sup> <a name="option_settings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.optionSettings"></a>

```python
option_settings: typing.Union[IResolvable, typing.List[DbOptionGroupOptionOptionSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]

option_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#option_settings DbOptionGroup#option_settings}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#port DbOptionGroup#port}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#version DbOptionGroup#version}.

---

##### `vpc_security_group_memberships`<sup>Optional</sup> <a name="vpc_security_group_memberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption.property.vpcSecurityGroupMemberships"></a>

```python
vpc_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}.

---

### DbOptionGroupOptionOptionSettings <a name="DbOptionGroupOptionOptionSettings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupOptionOptionSettings(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#value DbOptionGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#name DbOptionGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#value DbOptionGroup#value}.

---

### DbOptionGroupTimeouts <a name="DbOptionGroupTimeouts" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group#delete DbOptionGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbOptionGroupOptionList <a name="DbOptionGroupOptionList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DbOptionGroupOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DbOptionGroupOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>]]

---


### DbOptionGroupOptionOptionSettingsList <a name="DbOptionGroupOptionOptionSettingsList" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupOptionOptionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DbOptionGroupOptionOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DbOptionGroupOptionOptionSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]

---


### DbOptionGroupOptionOptionSettingsOutputReference <a name="DbOptionGroupOptionOptionSettingsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbOptionGroupOptionOptionSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>, cdktf.IResolvable]

---


### DbOptionGroupOptionOutputReference <a name="DbOptionGroupOptionOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings">put_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships">reset_db_security_group_memberships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings">reset_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships">reset_vpc_security_group_memberships</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_option_settings` <a name="put_option_settings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings"></a>

```python
def put_option_settings(
  value: typing.Union[IResolvable, typing.List[DbOptionGroupOptionOptionSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]

---

##### `reset_db_security_group_memberships` <a name="reset_db_security_group_memberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetDbSecurityGroupMemberships"></a>

```python
def reset_db_security_group_memberships() -> None
```

##### `reset_option_settings` <a name="reset_option_settings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetOptionSettings"></a>

```python
def reset_option_settings() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_vpc_security_group_memberships` <a name="reset_vpc_security_group_memberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.resetVpcSecurityGroupMemberships"></a>

```python
def reset_vpc_security_group_memberships() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings">option_settings</a></code> | <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput">db_security_group_memberships_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput">option_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput">option_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput">vpc_security_group_memberships_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships">db_security_group_memberships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName">option_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships">vpc_security_group_memberships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `option_settings`<sup>Required</sup> <a name="option_settings" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettings"></a>

```python
option_settings: DbOptionGroupOptionOptionSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettingsList">DbOptionGroupOptionOptionSettingsList</a>

---

##### `db_security_group_memberships_input`<sup>Optional</sup> <a name="db_security_group_memberships_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```python
db_security_group_memberships_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option_name_input`<sup>Optional</sup> <a name="option_name_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionNameInput"></a>

```python
option_name_input: str
```

- *Type:* str

---

##### `option_settings_input`<sup>Optional</sup> <a name="option_settings_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionSettingsInput"></a>

```python
option_settings_input: typing.Union[IResolvable, typing.List[DbOptionGroupOptionOptionSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOptionSettings">DbOptionGroupOptionOptionSettings</a>]]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `vpc_security_group_memberships_input`<sup>Optional</sup> <a name="vpc_security_group_memberships_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```python
vpc_security_group_memberships_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_security_group_memberships`<sup>Required</sup> <a name="db_security_group_memberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.dbSecurityGroupMemberships"></a>

```python
db_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option_name`<sup>Required</sup> <a name="option_name" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vpc_security_group_memberships`<sup>Required</sup> <a name="vpc_security_group_memberships" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.vpcSecurityGroupMemberships"></a>

```python
vpc_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbOptionGroupOption, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupOption">DbOptionGroupOption</a>, cdktf.IResolvable]

---


### DbOptionGroupTimeoutsOutputReference <a name="DbOptionGroupTimeoutsOutputReference" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_option_group

dbOptionGroup.DbOptionGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbOptionGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbOptionGroup.DbOptionGroupTimeouts">DbOptionGroupTimeouts</a>, cdktf.IResolvable]

---



