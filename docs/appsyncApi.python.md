# `appsyncApi` Submodule <a name="`appsyncApi` Submodule" id="@cdktf/provider-aws.appsyncApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApi <a name="AppsyncApi" id="@cdktf/provider-aws.appsyncApi.AppsyncApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api aws_appsync_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApi(
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
  event_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfig]] = None,
  owner_contact: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#name AppsyncApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig">event_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]</code> | event_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact">owner_contact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#tags AppsyncApi#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#name AppsyncApi#name}.

---

##### `event_config`<sup>Optional</sup> <a name="event_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.eventConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]

event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `owner_contact`<sup>Optional</sup> <a name="owner_contact" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.ownerContact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#region AppsyncApi#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#tags AppsyncApi#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.putEventConfig">put_event_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetEventConfig">reset_event_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOwnerContact">reset_owner_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_config` <a name="put_event_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.putEventConfig"></a>

```python
def put_event_config(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.putEventConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]

---

##### `reset_event_config` <a name="reset_event_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetEventConfig"></a>

```python
def reset_event_config() -> None
```

##### `reset_owner_contact` <a name="reset_owner_contact" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetOwnerContact"></a>

```python
def reset_owner_contact() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppsyncApi resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppsyncApi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppsyncApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppsyncApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiArn">api_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dns">dns</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfig">event_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList">AppsyncApiEventConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.wafWebAclArn">waf_web_acl_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.xrayEnabled">xray_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfigInput">event_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContactInput">owner_contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContact">owner_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_arn`<sup>Required</sup> <a name="api_arn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiArn"></a>

```python
api_arn: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.dns"></a>

```python
dns: StringMap
```

- *Type:* cdktf.StringMap

---

##### `event_config`<sup>Required</sup> <a name="event_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfig"></a>

```python
event_config: AppsyncApiEventConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList">AppsyncApiEventConfigList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `waf_web_acl_arn`<sup>Required</sup> <a name="waf_web_acl_arn" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.wafWebAclArn"></a>

```python
waf_web_acl_arn: str
```

- *Type:* str

---

##### `xray_enabled`<sup>Required</sup> <a name="xray_enabled" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.xrayEnabled"></a>

```python
xray_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_config_input`<sup>Optional</sup> <a name="event_config_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.eventConfigInput"></a>

```python
event_config_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_contact_input`<sup>Optional</sup> <a name="owner_contact_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContactInput"></a>

```python
owner_contact_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_contact`<sup>Required</sup> <a name="owner_contact" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncApi.AppsyncApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiConfig <a name="AppsyncApiConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  event_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfig]] = None,
  owner_contact: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#name AppsyncApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.eventConfig">event_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]</code> | event_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.ownerContact">owner_contact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#tags AppsyncApi#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#name AppsyncApi#name}.

---

##### `event_config`<sup>Optional</sup> <a name="event_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.eventConfig"></a>

```python
event_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]

event_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `owner_contact`<sup>Optional</sup> <a name="owner_contact" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.ownerContact"></a>

```python
owner_contact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#region AppsyncApi#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncApi.AppsyncApiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#tags AppsyncApi#tags}.

---

### AppsyncApiEventConfig <a name="AppsyncApiEventConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfig(
  auth_provider: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProvider]] = None,
  connection_auth_mode: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigConnectionAuthMode]] = None,
  default_publish_auth_mode: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultPublishAuthMode]] = None,
  default_subscribe_auth_mode: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultSubscribeAuthMode]] = None,
  log_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigLogConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.authProvider">auth_provider</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]</code> | auth_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.connectionAuthMode">connection_auth_mode</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]</code> | connection_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthMode">default_publish_auth_mode</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]</code> | default_publish_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthMode">default_subscribe_auth_mode</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]</code> | default_subscribe_auth_mode block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.logConfig">log_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]</code> | log_config block. |

---

##### `auth_provider`<sup>Optional</sup> <a name="auth_provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.authProvider"></a>

```python
auth_provider: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]

auth_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_provider AppsyncApi#auth_provider}

---

##### `connection_auth_mode`<sup>Optional</sup> <a name="connection_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.connectionAuthMode"></a>

```python
connection_auth_mode: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigConnectionAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]

connection_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#connection_auth_mode AppsyncApi#connection_auth_mode}

---

##### `default_publish_auth_mode`<sup>Optional</sup> <a name="default_publish_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthMode"></a>

```python
default_publish_auth_mode: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultPublishAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]

default_publish_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#default_publish_auth_mode AppsyncApi#default_publish_auth_mode}

---

##### `default_subscribe_auth_mode`<sup>Optional</sup> <a name="default_subscribe_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthMode"></a>

```python
default_subscribe_auth_mode: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultSubscribeAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]

default_subscribe_auth_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#default_subscribe_auth_mode AppsyncApi#default_subscribe_auth_mode}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig.property.logConfig"></a>

```python
log_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

### AppsyncApiEventConfigAuthProvider <a name="AppsyncApiEventConfigAuthProvider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProvider(
  auth_type: str,
  cognito_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderCognitoConfig]] = None,
  lambda_authorizer_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig]] = None,
  openid_connect_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderOpenidConnectConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.cognitoConfig">cognito_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]</code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]</code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.openidConnectConfig">openid_connect_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]</code> | openid_connect_config block. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

##### `cognito_config`<sup>Optional</sup> <a name="cognito_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.cognitoConfig"></a>

```python
cognito_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderCognitoConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]

cognito_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}

---

##### `openid_connect_config`<sup>Optional</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider.property.openidConnectConfig"></a>

```python
openid_connect_config: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderOpenidConnectConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]

openid_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#openid_connect_config AppsyncApi#openid_connect_config}

---

### AppsyncApiEventConfigAuthProviderCognitoConfig <a name="AppsyncApiEventConfigAuthProviderCognitoConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig(
  aws_region: str,
  user_pool_id: str,
  app_id_client_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}. |

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

##### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

### AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig <a name="AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig(
  authorizer_uri: str,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  identity_validation_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}. |

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

### AppsyncApiEventConfigAuthProviderOpenidConnectConfig <a name="AppsyncApiEventConfigAuthProviderOpenidConnectConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig(
  issuer: str,
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

##### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

##### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

### AppsyncApiEventConfigConnectionAuthMode <a name="AppsyncApiEventConfigConnectionAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigConnectionAuthMode(
  auth_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

### AppsyncApiEventConfigDefaultPublishAuthMode <a name="AppsyncApiEventConfigDefaultPublishAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode(
  auth_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

### AppsyncApiEventConfigDefaultSubscribeAuthMode <a name="AppsyncApiEventConfigDefaultSubscribeAuthMode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode(
  auth_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}. |

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}.

---

### AppsyncApiEventConfigLogConfig <a name="AppsyncApiEventConfigLogConfig" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigLogConfig(
  cloudwatch_logs_role_arn: str,
  log_level: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}. |

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncApiEventConfigAuthProviderCognitoConfigList <a name="AppsyncApiEventConfigAuthProviderCognitoConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderCognitoConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]

---


### AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference <a name="AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resetAppIdClientRegex">reset_app_id_client_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id_client_regex` <a name="reset_app_id_client_regex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.resetAppIdClientRegex"></a>

```python
def reset_app_id_client_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegexInput">app_id_client_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex_input`<sup>Optional</sup> <a name="app_id_client_regex_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegexInput"></a>

```python
app_id_client_regex_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigAuthProviderCognitoConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]

---


### AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList <a name="AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]

---


### AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference <a name="AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]

---


### AppsyncApiEventConfigAuthProviderList <a name="AppsyncApiEventConfigAuthProviderList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigAuthProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]

---


### AppsyncApiEventConfigAuthProviderOpenidConnectConfigList <a name="AppsyncApiEventConfigAuthProviderOpenidConnectConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderOpenidConnectConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]

---


### AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference <a name="AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetAuthTtl">reset_auth_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetIatTtl">reset_iat_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_ttl` <a name="reset_auth_ttl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```python
def reset_auth_ttl() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_iat_ttl` <a name="reset_iat_ttl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.resetIatTtl"></a>

```python
def reset_iat_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtlInput">auth_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtlInput">iat_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl_input`<sup>Optional</sup> <a name="auth_ttl_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```python
auth_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `iat_ttl_input`<sup>Optional</sup> <a name="iat_ttl_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```python
iat_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigAuthProviderOpenidConnectConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]

---


### AppsyncApiEventConfigAuthProviderOutputReference <a name="AppsyncApiEventConfigAuthProviderOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putCognitoConfig">put_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putLambdaAuthorizerConfig">put_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putOpenidConnectConfig">put_openid_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetCognitoConfig">reset_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetLambdaAuthorizerConfig">reset_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetOpenidConnectConfig">reset_openid_connect_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cognito_config` <a name="put_cognito_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putCognitoConfig"></a>

```python
def put_cognito_config(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderCognitoConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]

---

##### `put_lambda_authorizer_config` <a name="put_lambda_authorizer_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putLambdaAuthorizerConfig"></a>

```python
def put_lambda_authorizer_config(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]

---

##### `put_openid_connect_config` <a name="put_openid_connect_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putOpenidConnectConfig"></a>

```python
def put_openid_connect_config(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderOpenidConnectConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.putOpenidConnectConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]

---

##### `reset_cognito_config` <a name="reset_cognito_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetCognitoConfig"></a>

```python
def reset_cognito_config() -> None
```

##### `reset_lambda_authorizer_config` <a name="reset_lambda_authorizer_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetLambdaAuthorizerConfig"></a>

```python
def reset_lambda_authorizer_config() -> None
```

##### `reset_openid_connect_config` <a name="reset_openid_connect_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.resetOpenidConnectConfig"></a>

```python
def reset_openid_connect_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList">AppsyncApiEventConfigAuthProviderCognitoConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfig">openid_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList">AppsyncApiEventConfigAuthProviderOpenidConnectConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfigInput">cognito_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfigInput">lambda_authorizer_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfigInput">openid_connect_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_config`<sup>Required</sup> <a name="cognito_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfig"></a>

```python
cognito_config: AppsyncApiEventConfigAuthProviderCognitoConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfigList">AppsyncApiEventConfigAuthProviderCognitoConfigList</a>

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfigList</a>

---

##### `openid_connect_config`<sup>Required</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfig"></a>

```python
openid_connect_config: AppsyncApiEventConfigAuthProviderOpenidConnectConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfigList">AppsyncApiEventConfigAuthProviderOpenidConnectConfigList</a>

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `cognito_config_input`<sup>Optional</sup> <a name="cognito_config_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.cognitoConfigInput"></a>

```python
cognito_config_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderCognitoConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderCognitoConfig">AppsyncApiEventConfigAuthProviderCognitoConfig</a>]]

---

##### `lambda_authorizer_config_input`<sup>Optional</sup> <a name="lambda_authorizer_config_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.lambdaAuthorizerConfigInput"></a>

```python
lambda_authorizer_config_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProviderLambdaAuthorizerConfig</a>]]

---

##### `openid_connect_config_input`<sup>Optional</sup> <a name="openid_connect_config_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.openidConnectConfigInput"></a>

```python
openid_connect_config_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProviderOpenidConnectConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOpenidConnectConfig">AppsyncApiEventConfigAuthProviderOpenidConnectConfig</a>]]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigAuthProvider]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]

---


### AppsyncApiEventConfigConnectionAuthModeList <a name="AppsyncApiEventConfigConnectionAuthModeList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigConnectionAuthModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigConnectionAuthModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigConnectionAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]

---


### AppsyncApiEventConfigConnectionAuthModeOutputReference <a name="AppsyncApiEventConfigConnectionAuthModeOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigConnectionAuthMode]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]

---


### AppsyncApiEventConfigDefaultPublishAuthModeList <a name="AppsyncApiEventConfigDefaultPublishAuthModeList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigDefaultPublishAuthModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultPublishAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]

---


### AppsyncApiEventConfigDefaultPublishAuthModeOutputReference <a name="AppsyncApiEventConfigDefaultPublishAuthModeOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigDefaultPublishAuthMode]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]

---


### AppsyncApiEventConfigDefaultSubscribeAuthModeList <a name="AppsyncApiEventConfigDefaultSubscribeAuthModeList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultSubscribeAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]

---


### AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference <a name="AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigDefaultSubscribeAuthMode]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]

---


### AppsyncApiEventConfigList <a name="AppsyncApiEventConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]]

---


### AppsyncApiEventConfigLogConfigList <a name="AppsyncApiEventConfigLogConfigList" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigLogConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncApiEventConfigLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]

---


### AppsyncApiEventConfigLogConfigOutputReference <a name="AppsyncApiEventConfigLogConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatch_logs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```python
cloudwatch_logs_role_arn_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfigLogConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]

---


### AppsyncApiEventConfigOutputReference <a name="AppsyncApiEventConfigOutputReference" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_api

appsyncApi.AppsyncApiEventConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProvider">put_auth_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthMode">put_connection_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthMode">put_default_publish_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthMode">put_default_subscribe_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProvider">reset_auth_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthMode">reset_connection_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthMode">reset_default_publish_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthMode">reset_default_subscribe_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig">reset_log_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_provider` <a name="put_auth_provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProvider"></a>

```python
def put_auth_provider(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProvider]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProvider.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]

---

##### `put_connection_auth_mode` <a name="put_connection_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthMode"></a>

```python
def put_connection_auth_mode(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigConnectionAuthMode]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthMode.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]

---

##### `put_default_publish_auth_mode` <a name="put_default_publish_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthMode"></a>

```python
def put_default_publish_auth_mode(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultPublishAuthMode]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthMode.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]

---

##### `put_default_subscribe_auth_mode` <a name="put_default_subscribe_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthMode"></a>

```python
def put_default_subscribe_auth_mode(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultSubscribeAuthMode]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthMode.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig"></a>

```python
def put_log_config(
  value: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigLogConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]

---

##### `reset_auth_provider` <a name="reset_auth_provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProvider"></a>

```python
def reset_auth_provider() -> None
```

##### `reset_connection_auth_mode` <a name="reset_connection_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthMode"></a>

```python
def reset_connection_auth_mode() -> None
```

##### `reset_default_publish_auth_mode` <a name="reset_default_publish_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthMode"></a>

```python
def reset_default_publish_auth_mode() -> None
```

##### `reset_default_subscribe_auth_mode` <a name="reset_default_subscribe_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthMode"></a>

```python
def reset_default_subscribe_auth_mode() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig"></a>

```python
def reset_log_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvider">auth_provider</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList">AppsyncApiEventConfigAuthProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthMode">connection_auth_mode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList">AppsyncApiEventConfigConnectionAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthMode">default_publish_auth_mode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList">AppsyncApiEventConfigDefaultPublishAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthMode">default_subscribe_auth_mode</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList">AppsyncApiEventConfigDefaultSubscribeAuthModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList">AppsyncApiEventConfigLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviderInput">auth_provider_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModeInput">connection_auth_mode_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModeInput">default_publish_auth_mode_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModeInput">default_subscribe_auth_mode_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput">log_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvider"></a>

```python
auth_provider: AppsyncApiEventConfigAuthProviderList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProviderList">AppsyncApiEventConfigAuthProviderList</a>

---

##### `connection_auth_mode`<sup>Required</sup> <a name="connection_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthMode"></a>

```python
connection_auth_mode: AppsyncApiEventConfigConnectionAuthModeList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthModeList">AppsyncApiEventConfigConnectionAuthModeList</a>

---

##### `default_publish_auth_mode`<sup>Required</sup> <a name="default_publish_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthMode"></a>

```python
default_publish_auth_mode: AppsyncApiEventConfigDefaultPublishAuthModeList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModeList">AppsyncApiEventConfigDefaultPublishAuthModeList</a>

---

##### `default_subscribe_auth_mode`<sup>Required</sup> <a name="default_subscribe_auth_mode" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthMode"></a>

```python
default_subscribe_auth_mode: AppsyncApiEventConfigDefaultSubscribeAuthModeList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModeList">AppsyncApiEventConfigDefaultSubscribeAuthModeList</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig"></a>

```python
log_config: AppsyncApiEventConfigLogConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfigList">AppsyncApiEventConfigLogConfigList</a>

---

##### `auth_provider_input`<sup>Optional</sup> <a name="auth_provider_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviderInput"></a>

```python
auth_provider_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigAuthProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigAuthProvider">AppsyncApiEventConfigAuthProvider</a>]]

---

##### `connection_auth_mode_input`<sup>Optional</sup> <a name="connection_auth_mode_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModeInput"></a>

```python
connection_auth_mode_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigConnectionAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigConnectionAuthMode">AppsyncApiEventConfigConnectionAuthMode</a>]]

---

##### `default_publish_auth_mode_input`<sup>Optional</sup> <a name="default_publish_auth_mode_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModeInput"></a>

```python
default_publish_auth_mode_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultPublishAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthMode">AppsyncApiEventConfigDefaultPublishAuthMode</a>]]

---

##### `default_subscribe_auth_mode_input`<sup>Optional</sup> <a name="default_subscribe_auth_mode_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModeInput"></a>

```python
default_subscribe_auth_mode_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigDefaultSubscribeAuthMode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthMode">AppsyncApiEventConfigDefaultSubscribeAuthMode</a>]]

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput"></a>

```python
log_config_input: typing.Union[IResolvable, typing.List[AppsyncApiEventConfigLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppsyncApiEventConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>]

---



