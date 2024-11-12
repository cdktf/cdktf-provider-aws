# `glueCatalogTableOptimizer` Submodule <a name="`glueCatalogTableOptimizer` Submodule" id="@cdktf/provider-aws.glueCatalogTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTableOptimizer <a name="GlueCatalogTableOptimizer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str,
  database_name: str,
  table_name: str,
  type: str,
  configuration: typing.Union[IResolvable, typing.List[GlueCatalogTableOptimizerConfiguration]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]</code> | configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.Initializer.parameter.configuration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#configuration GlueCatalogTableOptimizer#configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetConfiguration">reset_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.putConfiguration"></a>

```python
def put_configuration(
  value: typing.Union[IResolvable, typing.List[GlueCatalogTableOptimizerConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.putConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GlueCatalogTableOptimizer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GlueCatalogTableOptimizer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueCatalogTableOptimizer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueCatalogTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueCatalogTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList">GlueCatalogTableOptimizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configurationInput">configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configuration"></a>

```python
configuration: GlueCatalogTableOptimizerConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList">GlueCatalogTableOptimizerConfigurationList</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.configurationInput"></a>

```python
configuration_input: typing.Union[IResolvable, typing.List[GlueCatalogTableOptimizerConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableOptimizerConfig <a name="GlueCatalogTableOptimizerConfig" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str,
  database_name: str,
  table_name: str,
  type: str,
  configuration: typing.Union[IResolvable, typing.List[GlueCatalogTableOptimizerConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]</code> | configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfig.property.configuration"></a>

```python
configuration: typing.Union[IResolvable, typing.List[GlueCatalogTableOptimizerConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#configuration GlueCatalogTableOptimizer#configuration}

---

### GlueCatalogTableOptimizerConfiguration <a name="GlueCatalogTableOptimizerConfiguration" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration(
  enabled: typing.Union[bool, IResolvable],
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#enabled GlueCatalogTableOptimizer#enabled}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#role_arn GlueCatalogTableOptimizer#role_arn}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#enabled GlueCatalogTableOptimizer#enabled}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/glue_catalog_table_optimizer#role_arn GlueCatalogTableOptimizer#role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTableOptimizerConfigurationList <a name="GlueCatalogTableOptimizerConfigurationList" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogTableOptimizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCatalogTableOptimizerConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]]

---


### GlueCatalogTableOptimizerConfigurationOutputReference <a name="GlueCatalogTableOptimizerConfigurationOutputReference" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table_optimizer

glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlueCatalogTableOptimizerConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.glueCatalogTableOptimizer.GlueCatalogTableOptimizerConfiguration">GlueCatalogTableOptimizerConfiguration</a>]

---



