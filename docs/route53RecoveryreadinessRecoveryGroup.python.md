# `route53RecoveryreadinessRecoveryGroup` Submodule <a name="`route53RecoveryreadinessRecoveryGroup` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessRecoveryGroup <a name="Route53RecoveryreadinessRecoveryGroup" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group aws_route53recoveryreadiness_recovery_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  recovery_group_name: str,
  cells: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Route53RecoveryreadinessRecoveryGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.recoveryGroupName">recovery_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.cells">cells</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `recovery_group_name`<sup>Required</sup> <a name="recovery_group_name" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.recoveryGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}.

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.cells"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells">reset_cells</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}.

---

##### `reset_cells` <a name="reset_cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetCells"></a>

```python
def reset_cells() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference">Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput">cells_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput">recovery_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells">cells</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName">recovery_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeouts"></a>

```python
timeouts: Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference">Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference</a>

---

##### `cells_input`<sup>Optional</sup> <a name="cells_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cellsInput"></a>

```python
cells_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `recovery_group_name_input`<sup>Optional</sup> <a name="recovery_group_name_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupNameInput"></a>

```python
recovery_group_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Route53RecoveryreadinessRecoveryGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>, cdktf.IResolvable]

---

##### `cells`<sup>Required</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.cells"></a>

```python
cells: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recovery_group_name`<sup>Required</sup> <a name="recovery_group_name" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.recoveryGroupName"></a>

```python
recovery_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessRecoveryGroupConfig <a name="Route53RecoveryreadinessRecoveryGroupConfig" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  recovery_group_name: str,
  cells: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Route53RecoveryreadinessRecoveryGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName">recovery_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells">cells</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `recovery_group_name`<sup>Required</sup> <a name="recovery_group_name" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.recoveryGroupName"></a>

```python
recovery_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}.

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.cells"></a>

```python
cells: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#cells Route53RecoveryreadinessRecoveryGroup#cells}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#id Route53RecoveryreadinessRecoveryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags Route53RecoveryreadinessRecoveryGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupConfig.property.timeouts"></a>

```python
timeouts: Route53RecoveryreadinessRecoveryGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}

---

### Route53RecoveryreadinessRecoveryGroupTimeouts <a name="Route53RecoveryreadinessRecoveryGroupTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group#delete Route53RecoveryreadinessRecoveryGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference <a name="Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_recovery_group

route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Route53RecoveryreadinessRecoveryGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessRecoveryGroup.Route53RecoveryreadinessRecoveryGroupTimeouts">Route53RecoveryreadinessRecoveryGroupTimeouts</a>, cdktf.IResolvable]

---



