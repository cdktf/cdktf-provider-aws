# `auditmanagerAssessmentDelegation` Submodule <a name="`auditmanagerAssessmentDelegation` Submodule" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentDelegation <a name="AuditmanagerAssessmentDelegation" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment_delegation

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assessment_id: str,
  control_set_id: str,
  role_arn: str,
  role_type: str,
  comment: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.assessmentId">assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.controlSetId">control_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleType">role_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.assessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `control_set_id`<sup>Required</sup> <a name="control_set_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.controlSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.roleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#region AuditmanagerAssessmentDelegation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuditmanagerAssessmentDelegation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment_delegation

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment_delegation

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment_delegation

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment_delegation

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuditmanagerAssessmentDelegation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuditmanagerAssessmentDelegation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuditmanagerAssessmentDelegation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentDelegation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId">delegation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput">assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput">control_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput">role_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId">control_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegation_id`<sup>Required</sup> <a name="delegation_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.delegationId"></a>

```python
delegation_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `assessment_id_input`<sup>Optional</sup> <a name="assessment_id_input" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentIdInput"></a>

```python
assessment_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `control_set_id_input`<sup>Optional</sup> <a name="control_set_id_input" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetIdInput"></a>

```python
control_set_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_type_input`<sup>Optional</sup> <a name="role_type_input" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleTypeInput"></a>

```python
role_type_input: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `control_set_id`<sup>Required</sup> <a name="control_set_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.controlSetId"></a>

```python
control_set_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentDelegationConfig <a name="AuditmanagerAssessmentDelegationConfig" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment_delegation

auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assessment_id: str,
  control_set_id: str,
  role_arn: str,
  role_type: str,
  comment: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId">assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId">control_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType">role_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}.

---

##### `control_set_id`<sup>Required</sup> <a name="control_set_id" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.controlSetId"></a>

```python
control_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}.

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.auditmanagerAssessmentDelegation.AuditmanagerAssessmentDelegationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/auditmanager_assessment_delegation#region AuditmanagerAssessmentDelegation#region}

---



