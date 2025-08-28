# `glueCatalogDatabase` Submodule <a name="`glueCatalogDatabase` Submodule" id="@cdktf/provider-aws.glueCatalogDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogDatabase <a name="GlueCatalogDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database aws_glue_catalog_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabase(
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
  catalog_id: str = None,
  create_table_default_permission: typing.Union[IResolvable, typing.List[GlueCatalogDatabaseCreateTableDefaultPermission]] = None,
  description: str = None,
  federated_database: GlueCatalogDatabaseFederatedDatabase = None,
  id: str = None,
  location_uri: str = None,
  parameters: typing.Mapping[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_database: GlueCatalogDatabaseTargetDatabase = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.createTableDefaultPermission">create_table_default_permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]</code> | create_table_default_permission block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.federatedDatabase">federated_database</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | federated_database block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.locationUri">location_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.targetDatabase">target_database</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `create_table_default_permission`<sup>Optional</sup> <a name="create_table_default_permission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.createTableDefaultPermission"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]

create_table_default_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `federated_database`<sup>Optional</sup> <a name="federated_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.federatedDatabase"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

federated_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#federated_database GlueCatalogDatabase#federated_database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.locationUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}.

---

##### `target_database`<sup>Optional</sup> <a name="target_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.targetDatabase"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission">put_create_table_default_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase">put_federated_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase">put_target_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission">reset_create_table_default_permission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetFederatedDatabase">reset_federated_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase">reset_target_database</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_create_table_default_permission` <a name="put_create_table_default_permission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission"></a>

```python
def put_create_table_default_permission(
  value: typing.Union[IResolvable, typing.List[GlueCatalogDatabaseCreateTableDefaultPermission]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putCreateTableDefaultPermission.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]

---

##### `put_federated_database` <a name="put_federated_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase"></a>

```python
def put_federated_database(
  connection_name: str = None,
  identifier: str = None
) -> None
```

###### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase.parameter.connectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}.

---

###### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putFederatedDatabase.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}.

---

##### `put_target_database` <a name="put_target_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase"></a>

```python
def put_target_database(
  catalog_id: str,
  database_name: str,
  region: str = None
) -> None
```

###### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}.

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_create_table_default_permission` <a name="reset_create_table_default_permission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetCreateTableDefaultPermission"></a>

```python
def reset_create_table_default_permission() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_federated_database` <a name="reset_federated_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetFederatedDatabase"></a>

```python
def reset_federated_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_target_database` <a name="reset_target_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase"></a>

```python
def reset_target_database() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GlueCatalogDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueCatalogDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueCatalogDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueCatalogDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission">create_table_default_permission</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabase">federated_database</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference">GlueCatalogDatabaseFederatedDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase">target_database</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput">create_table_default_permission_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabaseInput">federated_database_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput">target_database_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_table_default_permission`<sup>Required</sup> <a name="create_table_default_permission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermission"></a>

```python
create_table_default_permission: GlueCatalogDatabaseCreateTableDefaultPermissionList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList">GlueCatalogDatabaseCreateTableDefaultPermissionList</a>

---

##### `federated_database`<sup>Required</sup> <a name="federated_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabase"></a>

```python
federated_database: GlueCatalogDatabaseFederatedDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference">GlueCatalogDatabaseFederatedDatabaseOutputReference</a>

---

##### `target_database`<sup>Required</sup> <a name="target_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase"></a>

```python
target_database: GlueCatalogDatabaseTargetDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `create_table_default_permission_input`<sup>Optional</sup> <a name="create_table_default_permission_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.createTableDefaultPermissionInput"></a>

```python
create_table_default_permission_input: typing.Union[IResolvable, typing.List[GlueCatalogDatabaseCreateTableDefaultPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `federated_database_input`<sup>Optional</sup> <a name="federated_database_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.federatedDatabaseInput"></a>

```python
federated_database_input: GlueCatalogDatabaseFederatedDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_database_input`<sup>Optional</sup> <a name="target_database_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput"></a>

```python
target_database_input: GlueCatalogDatabaseTargetDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogDatabaseConfig <a name="GlueCatalogDatabaseConfig" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  catalog_id: str = None,
  create_table_default_permission: typing.Union[IResolvable, typing.List[GlueCatalogDatabaseCreateTableDefaultPermission]] = None,
  description: str = None,
  federated_database: GlueCatalogDatabaseFederatedDatabase = None,
  id: str = None,
  location_uri: str = None,
  parameters: typing.Mapping[str] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_database: GlueCatalogDatabaseTargetDatabase = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission">create_table_default_permission</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]</code> | create_table_default_permission block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.federatedDatabase">federated_database</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | federated_database block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri">location_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase">target_database</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `create_table_default_permission`<sup>Optional</sup> <a name="create_table_default_permission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.createTableDefaultPermission"></a>

```python
create_table_default_permission: typing.Union[IResolvable, typing.List[GlueCatalogDatabaseCreateTableDefaultPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]

create_table_default_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#create_table_default_permission GlueCatalogDatabase#create_table_default_permission}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `federated_database`<sup>Optional</sup> <a name="federated_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.federatedDatabase"></a>

```python
federated_database: GlueCatalogDatabaseFederatedDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

federated_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#federated_database GlueCatalogDatabase#federated_database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags GlueCatalogDatabase#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#tags_all GlueCatalogDatabase#tags_all}.

---

##### `target_database`<sup>Optional</sup> <a name="target_database" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase"></a>

```python
target_database: GlueCatalogDatabaseTargetDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

### GlueCatalogDatabaseCreateTableDefaultPermission <a name="GlueCatalogDatabaseCreateTableDefaultPermission" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission(
  permissions: typing.List[str] = None,
  principal: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#permissions GlueCatalogDatabase#permissions}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#permissions GlueCatalogDatabase#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission.property.principal"></a>

```python
principal: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#principal GlueCatalogDatabase#principal}

---

### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal(
  data_lake_principal_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}. |

---

##### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}.

---

### GlueCatalogDatabaseFederatedDatabase <a name="GlueCatalogDatabaseFederatedDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase(
  connection_name: str = None,
  identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#connection_name GlueCatalogDatabase#connection_name}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#identifier GlueCatalogDatabase#identifier}.

---

### GlueCatalogDatabaseTargetDatabase <a name="GlueCatalogDatabaseTargetDatabase" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase(
  catalog_id: str,
  database_name: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}. |

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#region GlueCatalogDatabase#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogDatabaseCreateTableDefaultPermissionList <a name="GlueCatalogDatabaseCreateTableDefaultPermissionList" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCatalogDatabaseCreateTableDefaultPermission]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]]

---


### GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal"></a>

```python
def put_principal(
  data_lake_principal_identifier: str = None
) -> None
```

###### `data_lake_principal_identifier`<sup>Optional</sup> <a name="data_lake_principal_identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.putPrincipal.parameter.dataLakePrincipalIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/glue_catalog_database#data_lake_principal_identifier GlueCatalogDatabase#data_lake_principal_identifier}.

---

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput">principal_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principal"></a>

```python
principal: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference</a>

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.principalInput"></a>

```python
principal_input: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlueCatalogDatabaseCreateTableDefaultPermission]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermission">GlueCatalogDatabaseCreateTableDefaultPermission</a>]

---


### GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference <a name="GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier">reset_data_lake_principal_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_lake_principal_identifier` <a name="reset_data_lake_principal_identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```python
def reset_data_lake_principal_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">data_lake_principal_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier_input`<sup>Optional</sup> <a name="data_lake_principal_identifier_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```python
data_lake_principal_identifier_input: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal">GlueCatalogDatabaseCreateTableDefaultPermissionPrincipal</a>

---


### GlueCatalogDatabaseFederatedDatabaseOutputReference <a name="GlueCatalogDatabaseFederatedDatabaseOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogDatabaseFederatedDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseFederatedDatabase">GlueCatalogDatabaseFederatedDatabase</a>

---


### GlueCatalogDatabaseTargetDatabaseOutputReference <a name="GlueCatalogDatabaseTargetDatabaseOutputReference" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_database

glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogDatabaseTargetDatabase
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---



