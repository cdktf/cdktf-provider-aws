# `chimesdkvoiceSipMediaApplication` Submodule <a name="`chimesdkvoiceSipMediaApplication` Submodule" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceSipMediaApplication <a name="ChimesdkvoiceSipMediaApplication" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application aws_chimesdkvoice_sip_media_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_region: str,
  endpoints: ChimesdkvoiceSipMediaApplicationEndpoints,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}.

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.endpoints"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints">put_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoints` <a name="put_endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints"></a>

```python
def put_endpoints(
  lambda_arn: str
) -> None
```

###### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.putEndpoints.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChimesdkvoiceSipMediaApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimesdkvoiceSipMediaApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimesdkvoiceSipMediaApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceSipMediaApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput">endpoints_input</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpoints"></a>

```python
endpoints: ChimesdkvoiceSipMediaApplicationEndpointsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference">ChimesdkvoiceSipMediaApplicationEndpointsOutputReference</a>

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.endpointsInput"></a>

```python
endpoints_input: ChimesdkvoiceSipMediaApplicationEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceSipMediaApplicationConfig <a name="ChimesdkvoiceSipMediaApplicationConfig" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_region: str,
  endpoints: ChimesdkvoiceSipMediaApplicationEndpoints,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#aws_region ChimesdkvoiceSipMediaApplication#aws_region}.

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.endpoints"></a>

```python
endpoints: ChimesdkvoiceSipMediaApplicationEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#endpoints ChimesdkvoiceSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#name ChimesdkvoiceSipMediaApplication#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#id ChimesdkvoiceSipMediaApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags ChimesdkvoiceSipMediaApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#tags_all ChimesdkvoiceSipMediaApplication#tags_all}.

---

### ChimesdkvoiceSipMediaApplicationEndpoints <a name="ChimesdkvoiceSipMediaApplicationEndpoints" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints(
  lambda_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}. |

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/chimesdkvoice_sip_media_application#lambda_arn ChimesdkvoiceSipMediaApplication#lambda_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceSipMediaApplicationEndpointsOutputReference <a name="ChimesdkvoiceSipMediaApplicationEndpointsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_sip_media_application

chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: ChimesdkvoiceSipMediaApplicationEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceSipMediaApplication.ChimesdkvoiceSipMediaApplicationEndpoints">ChimesdkvoiceSipMediaApplicationEndpoints</a>

---



