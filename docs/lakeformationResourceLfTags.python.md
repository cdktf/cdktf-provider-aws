# `lakeformationResourceLfTags` Submodule <a name="`lakeformationResourceLfTags` Submodule" id="@cdktf/provider-aws.lakeformationResourceLfTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResourceLfTags <a name="LakeformationResourceLfTags" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags aws_lakeformation_resource_lf_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTags(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lf_tag: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagsLfTag]],
  catalog_id: str = None,
  database: LakeformationResourceLfTagsDatabase = None,
  id: str = None,
  table: LakeformationResourceLfTagsTable = None,
  table_with_columns: LakeformationResourceLfTagsTableWithColumns = None,
  timeouts: LakeformationResourceLfTagsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lfTag">lf_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.lfTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.database"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.tableWithColumns"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag">put_lf_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns">put_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns">reset_table_with_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_database` <a name="put_database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase"></a>

```python
def put_database(
  name: str,
  catalog_id: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putDatabase.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `put_lf_tag` <a name="put_lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag"></a>

```python
def put_lf_tag(
  value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagsLfTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putLfTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]

---

##### `put_table` <a name="put_table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable"></a>

```python
def put_table(
  database_name: str,
  catalog_id: str = None,
  name: str = None,
  wildcard: typing.Union[bool, IResolvable] = None
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

###### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTable.parameter.wildcard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

##### `put_table_with_columns` <a name="put_table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns"></a>

```python
def put_table_with_columns(
  database_name: str,
  name: str,
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  excluded_column_names: typing.List[str] = None,
  wildcard: typing.Union[bool, IResolvable] = None
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

###### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.columnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}.

---

###### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.excludedColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}.

---

###### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTableWithColumns.parameter.wildcard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}.

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_with_columns` <a name="reset_table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTableWithColumns"></a>

```python
def reset_table_with_columns() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTags.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag">lf_tag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput">database_input</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput">lf_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput">table_input</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput">table_with_columns_input</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.database"></a>

```python
database: LakeformationResourceLfTagsDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference">LakeformationResourceLfTagsDatabaseOutputReference</a>

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTag"></a>

```python
lf_tag: LakeformationResourceLfTagsLfTagList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList">LakeformationResourceLfTagsLfTagList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.table"></a>

```python
table: LakeformationResourceLfTagsTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference">LakeformationResourceLfTagsTableOutputReference</a>

---

##### `table_with_columns`<sup>Required</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationResourceLfTagsTableWithColumnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference">LakeformationResourceLfTagsTableWithColumnsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeouts"></a>

```python
timeouts: LakeformationResourceLfTagsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference">LakeformationResourceLfTagsTimeoutsOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.databaseInput"></a>

```python
database_input: LakeformationResourceLfTagsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lf_tag_input`<sup>Optional</sup> <a name="lf_tag_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.lfTagInput"></a>

```python
lf_tag_input: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagsLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableInput"></a>

```python
table_input: LakeformationResourceLfTagsTable
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---

##### `table_with_columns_input`<sup>Optional</sup> <a name="table_with_columns_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tableWithColumnsInput"></a>

```python
table_with_columns_input: LakeformationResourceLfTagsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LakeformationResourceLfTagsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>, cdktf.IResolvable]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceLfTagsConfig <a name="LakeformationResourceLfTagsConfig" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lf_tag: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagsLfTag]],
  catalog_id: str = None,
  database: LakeformationResourceLfTagsDatabase = None,
  id: str = None,
  table: LakeformationResourceLfTagsTable = None,
  table_with_columns: LakeformationResourceLfTagsTableWithColumns = None,
  timeouts: LakeformationResourceLfTagsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag">lf_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns">table_with_columns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | table_with_columns block. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lf_tag`<sup>Required</sup> <a name="lf_tag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.lfTag"></a>

```python
lf_tag: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagsLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]

lf_tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.database"></a>

```python
database: LakeformationResourceLfTagsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

database block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.table"></a>

```python
table: LakeformationResourceLfTagsTable
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}

---

##### `table_with_columns`<sup>Optional</sup> <a name="table_with_columns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.tableWithColumns"></a>

```python
table_with_columns: LakeformationResourceLfTagsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

table_with_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsConfig.property.timeouts"></a>

```python
timeouts: LakeformationResourceLfTagsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}

---

### LakeformationResourceLfTagsDatabase <a name="LakeformationResourceLfTagsDatabase" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase(
  name: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsLfTag <a name="LakeformationResourceLfTagsLfTag" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag(
  key: str,
  value: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

### LakeformationResourceLfTagsTable <a name="LakeformationResourceLfTagsTable" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsTable(
  database_name: str,
  catalog_id: str = None,
  name: str = None,
  wildcard: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTableWithColumns <a name="LakeformationResourceLfTagsTableWithColumns" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns(
  database_name: str,
  name: str,
  catalog_id: str = None,
  column_names: typing.List[str] = None,
  excluded_column_names: typing.List[str] = None,
  wildcard: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}.

---

##### `column_names`<sup>Optional</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}.

---

##### `excluded_column_names`<sup>Optional</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}.

---

### LakeformationResourceLfTagsTimeouts <a name="LakeformationResourceLfTagsTimeouts" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationResourceLfTagsDatabaseOutputReference <a name="LakeformationResourceLfTagsDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: LakeformationResourceLfTagsDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsDatabase">LakeformationResourceLfTagsDatabase</a>

---


### LakeformationResourceLfTagsLfTagList <a name="LakeformationResourceLfTagsLfTagList" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationResourceLfTagsLfTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationResourceLfTagsLfTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>]]

---


### LakeformationResourceLfTagsLfTagOutputReference <a name="LakeformationResourceLfTagsLfTagOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LakeformationResourceLfTagsLfTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsLfTag">LakeformationResourceLfTagsLfTag</a>, cdktf.IResolvable]

---


### LakeformationResourceLfTagsTableOutputReference <a name="LakeformationResourceLfTagsTableOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard">reset_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_wildcard` <a name="reset_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.resetWildcard"></a>

```python
def reset_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput">wildcard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `wildcard_input`<sup>Optional</sup> <a name="wildcard_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcardInput"></a>

```python
wildcard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableOutputReference.property.internalValue"></a>

```python
internal_value: LakeformationResourceLfTagsTable
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTable">LakeformationResourceLfTagsTable</a>

---


### LakeformationResourceLfTagsTableWithColumnsOutputReference <a name="LakeformationResourceLfTagsTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames">reset_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames">reset_excluded_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard">reset_wildcard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_column_names` <a name="reset_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetColumnNames"></a>

```python
def reset_column_names() -> None
```

##### `reset_excluded_column_names` <a name="reset_excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetExcludedColumnNames"></a>

```python
def reset_excluded_column_names() -> None
```

##### `reset_wildcard` <a name="reset_wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.resetWildcard"></a>

```python
def reset_wildcard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput">column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput">excluded_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput">wildcard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames">column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames">excluded_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard">wildcard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `column_names_input`<sup>Optional</sup> <a name="column_names_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNamesInput"></a>

```python
column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `excluded_column_names_input`<sup>Optional</sup> <a name="excluded_column_names_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNamesInput"></a>

```python
excluded_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `wildcard_input`<sup>Optional</sup> <a name="wildcard_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcardInput"></a>

```python
wildcard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `column_names`<sup>Required</sup> <a name="column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.columnNames"></a>

```python
column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `excluded_column_names`<sup>Required</sup> <a name="excluded_column_names" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.excludedColumnNames"></a>

```python
excluded_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.wildcard"></a>

```python
wildcard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumnsOutputReference.property.internalValue"></a>

```python
internal_value: LakeformationResourceLfTagsTableWithColumns
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTableWithColumns">LakeformationResourceLfTagsTableWithColumns</a>

---


### LakeformationResourceLfTagsTimeoutsOutputReference <a name="LakeformationResourceLfTagsTimeoutsOutputReference" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_resource_lf_tags

lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LakeformationResourceLfTagsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lakeformationResourceLfTags.LakeformationResourceLfTagsTimeouts">LakeformationResourceLfTagsTimeouts</a>, cdktf.IResolvable]

---



