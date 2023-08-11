# `aws_glue_data_quality_ruleset`

Refer to the Terraform Registory for docs: [`aws_glue_data_quality_ruleset`](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset).

# `glueDataQualityRuleset` Submodule <a name="`glueDataQualityRuleset` Submodule" id="@cdktf/provider-aws.glueDataQualityRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDataQualityRuleset <a name="GlueDataQualityRuleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset aws_glue_data_quality_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRuleset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ruleset: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_table: GlueDataQualityRulesetTargetTable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.ruleset">ruleset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.targetTable">target_table</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | target_table block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}.

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.ruleset"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.targetTable"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable">put_target_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable">reset_target_table</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_target_table` <a name="put_target_table" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable"></a>

```python
def put_target_table(
  database_name: str,
  table_name: str,
  catalog_id: str = None
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}.

---

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}.

---

###### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#catalog_id GlueDataQualityRuleset#catalog_id}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_target_table` <a name="reset_target_table" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable"></a>

```python
def reset_target_table() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRuleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRuleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRuleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lastModifiedOn">last_modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.recommendationRunId">recommendation_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable">target_table</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput">ruleset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput">target_table_input</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset">ruleset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `last_modified_on`<sup>Required</sup> <a name="last_modified_on" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lastModifiedOn"></a>

```python
last_modified_on: str
```

- *Type:* str

---

##### `recommendation_run_id`<sup>Required</sup> <a name="recommendation_run_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.recommendationRunId"></a>

```python
recommendation_run_id: str
```

- *Type:* str

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable"></a>

```python
target_table: GlueDataQualityRulesetTargetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ruleset_input`<sup>Optional</sup> <a name="ruleset_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput"></a>

```python
ruleset_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_table_input`<sup>Optional</sup> <a name="target_table_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput"></a>

```python
target_table_input: GlueDataQualityRulesetTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset"></a>

```python
ruleset: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDataQualityRulesetConfig <a name="GlueDataQualityRulesetConfig" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRulesetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ruleset: str,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_table: GlueDataQualityRulesetTargetTable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset">ruleset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable">target_table</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | target_table block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}.

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset"></a>

```python
ruleset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable"></a>

```python
target_table: GlueDataQualityRulesetTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

### GlueDataQualityRulesetTargetTable <a name="GlueDataQualityRulesetTargetTable" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRulesetTargetTable(
  database_name: str,
  table_name: str,
  catalog_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#catalog_id GlueDataQualityRuleset#catalog_id}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/glue_data_quality_ruleset#catalog_id GlueDataQualityRuleset#catalog_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDataQualityRulesetTargetTableOutputReference <a name="GlueDataQualityRulesetTargetTableOutputReference" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_data_quality_ruleset

glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetCatalogId">reset_catalog_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: GlueDataQualityRulesetTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---



