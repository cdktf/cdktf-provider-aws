# `route53ProfilesResourceAssociation` Submodule <a name="`route53ProfilesResourceAssociation` Submodule" id="@cdktf/provider-aws.route53ProfilesResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesResourceAssociation <a name="Route53ProfilesResourceAssociation" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association aws_route53profiles_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation(
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
  profile_id: str,
  resource_arn: str,
  resource_properties: str = None,
  timeouts: Route53ProfilesResourceAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceProperties">resource_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.profileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}.

---

##### `resource_properties`<sup>Optional</sup> <a name="resource_properties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.resourceProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#timeouts Route53ProfilesResourceAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetResourceProperties">reset_resource_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#create Route53ProfilesResourceAssociation#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#delete Route53ProfilesResourceAssociation#delete}

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#read Route53ProfilesResourceAssociation#read}

---

##### `reset_resource_properties` <a name="reset_resource_properties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetResourceProperties"></a>

```python
def reset_resource_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Route53ProfilesResourceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Route53ProfilesResourceAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53ProfilesResourceAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53ProfilesResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Route53ProfilesResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference">Route53ProfilesResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourcePropertiesInput">resource_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceProperties">resource_properties</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeouts"></a>

```python
timeouts: Route53ProfilesResourceAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference">Route53ProfilesResourceAssociationTimeoutsOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `resource_properties_input`<sup>Optional</sup> <a name="resource_properties_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourcePropertiesInput"></a>

```python
resource_properties_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Route53ProfilesResourceAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_properties`<sup>Required</sup> <a name="resource_properties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.resourceProperties"></a>

```python
resource_properties: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesResourceAssociationConfig <a name="Route53ProfilesResourceAssociationConfig" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  profile_id: str,
  resource_arn: str,
  resource_properties: str = None,
  timeouts: Route53ProfilesResourceAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceProperties">resource_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#name Route53ProfilesResourceAssociation#name}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#profile_id Route53ProfilesResourceAssociation#profile_id}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_arn Route53ProfilesResourceAssociation#resource_arn}.

---

##### `resource_properties`<sup>Optional</sup> <a name="resource_properties" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.resourceProperties"></a>

```python
resource_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#resource_properties Route53ProfilesResourceAssociation#resource_properties}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationConfig.property.timeouts"></a>

```python
timeouts: Route53ProfilesResourceAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#timeouts Route53ProfilesResourceAssociation#timeouts}

---

### Route53ProfilesResourceAssociationTimeouts <a name="Route53ProfilesResourceAssociationTimeouts" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#create Route53ProfilesResourceAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#delete Route53ProfilesResourceAssociation#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53profiles_resource_association#read Route53ProfilesResourceAssociation#read}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ProfilesResourceAssociationTimeoutsOutputReference <a name="Route53ProfilesResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_profiles_resource_association

route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Route53ProfilesResourceAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.route53ProfilesResourceAssociation.Route53ProfilesResourceAssociationTimeouts">Route53ProfilesResourceAssociationTimeouts</a>]

---



