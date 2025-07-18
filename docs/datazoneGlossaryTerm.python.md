# `datazoneGlossaryTerm` Submodule <a name="`datazoneGlossaryTerm` Submodule" id="@cdktf/provider-aws.datazoneGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGlossaryTerm <a name="DatazoneGlossaryTerm" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTerm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  glossary_identifier: str,
  name: str,
  domain_identifier: str = None,
  long_description: str = None,
  region: str = None,
  short_description: str = None,
  status: str = None,
  term_relations: typing.Union[IResolvable, typing.List[DatazoneGlossaryTermTermRelations]] = None,
  timeouts: DatazoneGlossaryTermTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.glossaryIdentifier">glossary_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.longDescription">long_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.shortDescription">short_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.termRelations">term_relations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]</code> | term_relations block. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `glossary_identifier`<sup>Required</sup> <a name="glossary_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.glossaryIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `domain_identifier`<sup>Optional</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.longDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#region DatazoneGlossaryTerm#region}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.shortDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `term_relations`<sup>Optional</sup> <a name="term_relations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.termRelations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations">put_term_relations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier">reset_domain_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription">reset_long_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription">reset_short_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations">reset_term_relations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_term_relations` <a name="put_term_relations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations"></a>

```python
def put_term_relations(
  value: typing.Union[IResolvable, typing.List[DatazoneGlossaryTermTermRelations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}

---

##### `reset_domain_identifier` <a name="reset_domain_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier"></a>

```python
def reset_domain_identifier() -> None
```

##### `reset_long_description` <a name="reset_long_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription"></a>

```python
def reset_long_description() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_short_description` <a name="reset_short_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription"></a>

```python
def reset_short_description() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_term_relations` <a name="reset_term_relations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations"></a>

```python
def reset_term_relations() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTerm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTerm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTerm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTerm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatazoneGlossaryTerm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneGlossaryTerm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations">term_relations</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput">glossary_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput">long_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput">short_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput">term_relations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier">glossary_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `term_relations`<sup>Required</sup> <a name="term_relations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations"></a>

```python
term_relations: DatazoneGlossaryTermTermRelationsList
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts"></a>

```python
timeouts: DatazoneGlossaryTermTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a>

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `glossary_identifier_input`<sup>Optional</sup> <a name="glossary_identifier_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput"></a>

```python
glossary_identifier_input: str
```

- *Type:* str

---

##### `long_description_input`<sup>Optional</sup> <a name="long_description_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput"></a>

```python
long_description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `short_description_input`<sup>Optional</sup> <a name="short_description_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput"></a>

```python
short_description_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `term_relations_input`<sup>Optional</sup> <a name="term_relations_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput"></a>

```python
term_relations_input: typing.Union[IResolvable, typing.List[DatazoneGlossaryTermTermRelations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatazoneGlossaryTermTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `glossary_identifier`<sup>Required</sup> <a name="glossary_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier"></a>

```python
glossary_identifier: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGlossaryTermConfig <a name="DatazoneGlossaryTermConfig" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTermConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  glossary_identifier: str,
  name: str,
  domain_identifier: str = None,
  long_description: str = None,
  region: str = None,
  short_description: str = None,
  status: str = None,
  term_relations: typing.Union[IResolvable, typing.List[DatazoneGlossaryTermTermRelations]] = None,
  timeouts: DatazoneGlossaryTermTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier">glossary_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription">long_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription">short_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations">term_relations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]</code> | term_relations block. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `glossary_identifier`<sup>Required</sup> <a name="glossary_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier"></a>

```python
glossary_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `domain_identifier`<sup>Optional</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#region DatazoneGlossaryTerm#region}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `term_relations`<sup>Optional</sup> <a name="term_relations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations"></a>

```python
term_relations: typing.Union[IResolvable, typing.List[DatazoneGlossaryTermTermRelations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts"></a>

```python
timeouts: DatazoneGlossaryTermTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

### DatazoneGlossaryTermTermRelations <a name="DatazoneGlossaryTermTermRelations" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations(
  classifies: typing.List[str] = None,
  is_a: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies">classifies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA">is_a</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}. |

---

##### `classifies`<sup>Optional</sup> <a name="classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies"></a>

```python
classifies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}.

---

##### `is_a`<sup>Optional</sup> <a name="is_a" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA"></a>

```python
is_a: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}.

---

### DatazoneGlossaryTermTimeouts <a name="DatazoneGlossaryTermTimeouts" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneGlossaryTermTermRelationsList <a name="DatazoneGlossaryTermTermRelationsList" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneGlossaryTermTermRelationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatazoneGlossaryTermTermRelations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]]

---


### DatazoneGlossaryTermTermRelationsOutputReference <a name="DatazoneGlossaryTermTermRelationsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies">reset_classifies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA">reset_is_a</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classifies` <a name="reset_classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies"></a>

```python
def reset_classifies() -> None
```

##### `reset_is_a` <a name="reset_is_a" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA"></a>

```python
def reset_is_a() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput">classifies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput">is_a_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies">classifies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA">is_a</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifies_input`<sup>Optional</sup> <a name="classifies_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput"></a>

```python
classifies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_a_input`<sup>Optional</sup> <a name="is_a_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput"></a>

```python
is_a_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classifies`<sup>Required</sup> <a name="classifies" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies"></a>

```python
classifies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_a`<sup>Required</sup> <a name="is_a" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA"></a>

```python
is_a: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatazoneGlossaryTermTermRelations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>]

---


### DatazoneGlossaryTermTimeoutsOutputReference <a name="DatazoneGlossaryTermTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_glossary_term

datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatazoneGlossaryTermTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>]

---



