# `route53RecoveryreadinessCell` Submodule <a name="`route53RecoveryreadinessCell` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessCell"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessCell <a name="Route53RecoveryreadinessCell" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell aws_route53recoveryreadiness_cell}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCell(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cell_name: str,
  cells: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Route53RecoveryreadinessCellTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.cellName">cell_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.cells">cells</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cell_name`<sup>Required</sup> <a name="cell_name" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.cellName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}.

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.cells"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#timeouts Route53RecoveryreadinessCell#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCells">reset_cells</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#delete Route53RecoveryreadinessCell#delete}.

---

##### `reset_cells` <a name="reset_cells" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCells"></a>

```python
def reset_cells() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCell.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCell.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCell.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.parentReadinessScopes">parent_readiness_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference">Route53RecoveryreadinessCellTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellNameInput">cell_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellsInput">cells_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellName">cell_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cells">cells</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `parent_readiness_scopes`<sup>Required</sup> <a name="parent_readiness_scopes" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.parentReadinessScopes"></a>

```python
parent_readiness_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeouts"></a>

```python
timeouts: Route53RecoveryreadinessCellTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference">Route53RecoveryreadinessCellTimeoutsOutputReference</a>

---

##### `cell_name_input`<sup>Optional</sup> <a name="cell_name_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellNameInput"></a>

```python
cell_name_input: str
```

- *Type:* str

---

##### `cells_input`<sup>Optional</sup> <a name="cells_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellsInput"></a>

```python
cells_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Route53RecoveryreadinessCellTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>, cdktf.IResolvable]

---

##### `cell_name`<sup>Required</sup> <a name="cell_name" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellName"></a>

```python
cell_name: str
```

- *Type:* str

---

##### `cells`<sup>Required</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cells"></a>

```python
cells: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessCellConfig <a name="Route53RecoveryreadinessCellConfig" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cell_name: str,
  cells: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Route53RecoveryreadinessCellTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cellName">cell_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cells">cells</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cell_name`<sup>Required</sup> <a name="cell_name" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cellName"></a>

```python
cell_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}.

---

##### `cells`<sup>Optional</sup> <a name="cells" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cells"></a>

```python
cells: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.timeouts"></a>

```python
timeouts: Route53RecoveryreadinessCellTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#timeouts Route53RecoveryreadinessCell#timeouts}

---

### Route53RecoveryreadinessCellTimeouts <a name="Route53RecoveryreadinessCellTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#delete Route53RecoveryreadinessCell#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell#delete Route53RecoveryreadinessCell#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessCellTimeoutsOutputReference <a name="Route53RecoveryreadinessCellTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_cell

route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Route53RecoveryreadinessCellTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>, cdktf.IResolvable]

---



