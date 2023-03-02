# `macie2FindingsFilter` Submodule <a name="`macie2FindingsFilter` Submodule" id="@cdktf/provider-aws.macie2FindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2FindingsFilter <a name="Macie2FindingsFilter" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter aws_macie2_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  finding_criteria: Macie2FindingsFilterFindingCriteria,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  position: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#action Macie2FindingsFilter#action}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#description Macie2FindingsFilter#description}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#id Macie2FindingsFilter#id}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name Macie2FindingsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#position Macie2FindingsFilter#position}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags Macie2FindingsFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#action Macie2FindingsFilter#action}.

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.findingCriteria"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#description Macie2FindingsFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#id Macie2FindingsFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name Macie2FindingsFilter#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#position Macie2FindingsFilter#position}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags Macie2FindingsFilter#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria">put_finding_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_finding_criteria` <a name="put_finding_criteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria"></a>

```python
def put_finding_criteria(
  criterion: typing.Union[IResolvable, typing.List[Macie2FindingsFilterFindingCriteriaCriterion]] = None
) -> None
```

###### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.putFindingCriteria.parameter.criterion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]

criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#criterion Macie2FindingsFilter#criterion}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference">Macie2FindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteriaInput">finding_criteria_input</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteria"></a>

```python
finding_criteria: Macie2FindingsFilterFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference">Macie2FindingsFilterFindingCriteriaOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `finding_criteria_input`<sup>Optional</sup> <a name="finding_criteria_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.findingCriteriaInput"></a>

```python
finding_criteria_input: Macie2FindingsFilterFindingCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2FindingsFilterConfig <a name="Macie2FindingsFilterConfig" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  finding_criteria: Macie2FindingsFilterFindingCriteria,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  position: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#action Macie2FindingsFilter#action}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.findingCriteria">finding_criteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | finding_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#description Macie2FindingsFilter#description}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#id Macie2FindingsFilter#id}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name Macie2FindingsFilter#name}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#position Macie2FindingsFilter#position}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags Macie2FindingsFilter#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#action Macie2FindingsFilter#action}.

---

##### `finding_criteria`<sup>Required</sup> <a name="finding_criteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.findingCriteria"></a>

```python
finding_criteria: Macie2FindingsFilterFindingCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

finding_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#description Macie2FindingsFilter#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#id Macie2FindingsFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name Macie2FindingsFilter#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#position Macie2FindingsFilter#position}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags Macie2FindingsFilter#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}.

---

### Macie2FindingsFilterFindingCriteria <a name="Macie2FindingsFilterFindingCriteria" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilterFindingCriteria(
  criterion: typing.Union[IResolvable, typing.List[Macie2FindingsFilterFindingCriteriaCriterion]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.property.criterion">criterion</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]</code> | criterion block. |

---

##### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria.property.criterion"></a>

```python
criterion: typing.Union[IResolvable, typing.List[Macie2FindingsFilterFindingCriteriaCriterion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]

criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#criterion Macie2FindingsFilter#criterion}

---

### Macie2FindingsFilterFindingCriteriaCriterion <a name="Macie2FindingsFilterFindingCriteriaCriterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion(
  field: str,
  eq: typing.List[str] = None,
  eq_exact_match: typing.List[str] = None,
  gt: str = None,
  gte: str = None,
  lt: str = None,
  lte: str = None,
  neq: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#field Macie2FindingsFilter#field}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eq">eq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq Macie2FindingsFilter#eq}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eqExactMatch">eq_exact_match</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gt">gt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gt Macie2FindingsFilter#gt}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gte">gte</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gte Macie2FindingsFilter#gte}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lt">lt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lt Macie2FindingsFilter#lt}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lte">lte</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lte Macie2FindingsFilter#lte}. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.neq">neq</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#neq Macie2FindingsFilter#neq}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#field Macie2FindingsFilter#field}.

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq Macie2FindingsFilter#eq}.

---

##### `eq_exact_match`<sup>Optional</sup> <a name="eq_exact_match" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.eqExactMatch"></a>

```python
eq_exact_match: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}.

---

##### `gt`<sup>Optional</sup> <a name="gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gt"></a>

```python
gt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gt Macie2FindingsFilter#gt}.

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.gte"></a>

```python
gte: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#gte Macie2FindingsFilter#gte}.

---

##### `lt`<sup>Optional</sup> <a name="lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lt"></a>

```python
lt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lt Macie2FindingsFilter#lt}.

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.lte"></a>

```python
lte: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#lte Macie2FindingsFilter#lte}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter#neq Macie2FindingsFilter#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2FindingsFilterFindingCriteriaCriterionList <a name="Macie2FindingsFilterFindingCriteriaCriterionList" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Macie2FindingsFilterFindingCriteriaCriterionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Macie2FindingsFilterFindingCriteriaCriterion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]

---


### Macie2FindingsFilterFindingCriteriaCriterionOutputReference <a name="Macie2FindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEq">reset_eq</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEqExactMatch">reset_eq_exact_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGt">reset_gt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGte">reset_gte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLt">reset_lt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLte">reset_lte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">reset_neq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_eq` <a name="reset_eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```python
def reset_eq() -> None
```

##### `reset_eq_exact_match` <a name="reset_eq_exact_match" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetEqExactMatch"></a>

```python
def reset_eq_exact_match() -> None
```

##### `reset_gt` <a name="reset_gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```python
def reset_gt() -> None
```

##### `reset_gte` <a name="reset_gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```python
def reset_gte() -> None
```

##### `reset_lt` <a name="reset_lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```python
def reset_lt() -> None
```

##### `reset_lte` <a name="reset_lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```python
def reset_lte() -> None
```

##### `reset_neq` <a name="reset_neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```python
def reset_neq() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatchInput">eq_exact_match_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">eq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">gte_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">gt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">lte_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">lt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">neq_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatch">eq_exact_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eq_exact_match_input`<sup>Optional</sup> <a name="eq_exact_match_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatchInput"></a>

```python
eq_exact_match_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq_input`<sup>Optional</sup> <a name="eq_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```python
eq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `gte_input`<sup>Optional</sup> <a name="gte_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```python
gte_input: str
```

- *Type:* str

---

##### `gt_input`<sup>Optional</sup> <a name="gt_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```python
gt_input: str
```

- *Type:* str

---

##### `lte_input`<sup>Optional</sup> <a name="lte_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```python
lte_input: str
```

- *Type:* str

---

##### `lt_input`<sup>Optional</sup> <a name="lt_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```python
lt_input: str
```

- *Type:* str

---

##### `neq_input`<sup>Optional</sup> <a name="neq_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```python
neq_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```python
eq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eq_exact_match`<sup>Required</sup> <a name="eq_exact_match" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.eqExactMatch"></a>

```python
eq_exact_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```python
gt: str
```

- *Type:* str

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```python
gte: str
```

- *Type:* str

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```python
lt: str
```

- *Type:* str

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```python
lte: str
```

- *Type:* str

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```python
neq: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Macie2FindingsFilterFindingCriteriaCriterion, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>, cdktf.IResolvable]

---


### Macie2FindingsFilterFindingCriteriaOutputReference <a name="Macie2FindingsFilterFindingCriteriaOutputReference" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import macie2_findings_filter

macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion">put_criterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resetCriterion">reset_criterion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criterion` <a name="put_criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```python
def put_criterion(
  value: typing.Union[IResolvable, typing.List[Macie2FindingsFilterFindingCriteriaCriterion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]

---

##### `reset_criterion` <a name="reset_criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```python
def reset_criterion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList">Macie2FindingsFilterFindingCriteriaCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterionInput">criterion_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```python
criterion: Macie2FindingsFilterFindingCriteriaCriterionList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterionList">Macie2FindingsFilterFindingCriteriaCriterionList</a>

---

##### `criterion_input`<sup>Optional</sup> <a name="criterion_input" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```python
criterion_input: typing.Union[IResolvable, typing.List[Macie2FindingsFilterFindingCriteriaCriterion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaCriterion">Macie2FindingsFilterFindingCriteriaCriterion</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: Macie2FindingsFilterFindingCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.macie2FindingsFilter.Macie2FindingsFilterFindingCriteria">Macie2FindingsFilterFindingCriteria</a>

---



