# `emrBlockPublicAccessConfiguration` Submodule <a name="`emrBlockPublicAccessConfiguration` Submodule" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrBlockPublicAccessConfiguration <a name="EmrBlockPublicAccessConfiguration" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  block_public_security_group_rules: typing.Union[bool, IResolvable],
  id: str = None,
  permitted_public_security_group_rule_range: typing.Union[IResolvable, typing.List[EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.blockPublicSecurityGroupRules">block_public_security_group_rules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.permittedPublicSecurityGroupRuleRange">permitted_public_security_group_rule_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]</code> | permitted_public_security_group_rule_range block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `block_public_security_group_rules`<sup>Required</sup> <a name="block_public_security_group_rules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.blockPublicSecurityGroupRules"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permitted_public_security_group_rule_range`<sup>Optional</sup> <a name="permitted_public_security_group_rule_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.permittedPublicSecurityGroupRuleRange"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]

permitted_public_security_group_rule_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange">put_permitted_public_security_group_rule_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange">reset_permitted_public_security_group_rule_range</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_permitted_public_security_group_rule_range` <a name="put_permitted_public_security_group_rule_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange"></a>

```python
def put_permitted_public_security_group_rule_range(
  value: typing.Union[IResolvable, typing.List[EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permitted_public_security_group_rule_range` <a name="reset_permitted_public_security_group_rule_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange"></a>

```python
def reset_permitted_public_security_group_rule_range() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EmrBlockPublicAccessConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EmrBlockPublicAccessConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmrBlockPublicAccessConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmrBlockPublicAccessConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmrBlockPublicAccessConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange">permitted_public_security_group_rule_range</a></code> | <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput">block_public_security_group_rules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput">permitted_public_security_group_rule_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules">block_public_security_group_rules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permitted_public_security_group_rule_range`<sup>Required</sup> <a name="permitted_public_security_group_rule_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange"></a>

```python
permitted_public_security_group_rule_range: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a>

---

##### `block_public_security_group_rules_input`<sup>Optional</sup> <a name="block_public_security_group_rules_input" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput"></a>

```python
block_public_security_group_rules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permitted_public_security_group_rule_range_input`<sup>Optional</sup> <a name="permitted_public_security_group_rule_range_input" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput"></a>

```python
permitted_public_security_group_rule_range_input: typing.Union[IResolvable, typing.List[EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]

---

##### `block_public_security_group_rules`<sup>Required</sup> <a name="block_public_security_group_rules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules"></a>

```python
block_public_security_group_rules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrBlockPublicAccessConfigurationConfig <a name="EmrBlockPublicAccessConfigurationConfig" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  block_public_security_group_rules: typing.Union[bool, IResolvable],
  id: str = None,
  permitted_public_security_group_rule_range: typing.Union[IResolvable, typing.List[EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules">block_public_security_group_rules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange">permitted_public_security_group_rule_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]</code> | permitted_public_security_group_rule_range block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `block_public_security_group_rules`<sup>Required</sup> <a name="block_public_security_group_rules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules"></a>

```python
block_public_security_group_rules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permitted_public_security_group_rule_range`<sup>Optional</sup> <a name="permitted_public_security_group_rule_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange"></a>

```python
permitted_public_security_group_rule_range: typing.Union[IResolvable, typing.List[EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]

permitted_public_security_group_rule_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}

---

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange(
  max_range: typing.Union[int, float],
  min_range: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange">max_range</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange">min_range</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}. |

---

##### `max_range`<sup>Required</sup> <a name="max_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange"></a>

```python
max_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}.

---

##### `min_range`<sup>Required</sup> <a name="min_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange"></a>

```python
min_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]]

---


### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import emr_block_public_access_configuration

emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput">max_range_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput">min_range_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange">max_range</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange">min_range</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_range_input`<sup>Optional</sup> <a name="max_range_input" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput"></a>

```python
max_range_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_range_input`<sup>Optional</sup> <a name="min_range_input" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput"></a>

```python
min_range_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_range`<sup>Required</sup> <a name="max_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange"></a>

```python
max_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_range`<sup>Required</sup> <a name="min_range" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange"></a>

```python
min_range: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange</a>]

---



