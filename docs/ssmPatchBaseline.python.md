# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktf/provider-aws.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  approval_rule: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRule]] = None,
  approved_patches: typing.List[str] = None,
  approved_patches_compliance_level: str = None,
  approved_patches_enable_non_security: typing.Union[bool, IResolvable] = None,
  description: str = None,
  global_filter: typing.Union[IResolvable, typing.List[SsmPatchBaselineGlobalFilter]] = None,
  id: str = None,
  operating_system: str = None,
  rejected_patches: typing.List[str] = None,
  rejected_patches_action: str = None,
  source: typing.Union[IResolvable, typing.List[SsmPatchBaselineSource]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRule">approval_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]</code> | approval_rule block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches">approved_patches</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel">approved_patches_compliance_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity">approved_patches_enable_non_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilter">global_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]</code> | global_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches">rejected_patches</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction">rejected_patches_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `approval_rule`<sup>Optional</sup> <a name="approval_rule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]

approval_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}

---

##### `approved_patches`<sup>Optional</sup> <a name="approved_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}.

---

##### `approved_patches_compliance_level`<sup>Optional</sup> <a name="approved_patches_compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.

---

##### `approved_patches_enable_non_security`<sup>Optional</sup> <a name="approved_patches_enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}.

---

##### `global_filter`<sup>Optional</sup> <a name="global_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]

global_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}.

---

##### `rejected_patches`<sup>Optional</sup> <a name="rejected_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}.

---

##### `rejected_patches_action`<sup>Optional</sup> <a name="rejected_patches_action" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.source"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#source SsmPatchBaseline#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule">put_approval_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter">put_global_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule">reset_approval_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">reset_approved_patches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">reset_approved_patches_compliance_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">reset_approved_patches_enable_non_security</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter">reset_global_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">reset_rejected_patches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">reset_rejected_patches_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_approval_rule` <a name="put_approval_rule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule"></a>

```python
def put_approval_rule(
  value: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]

---

##### `put_global_filter` <a name="put_global_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter"></a>

```python
def put_global_filter(
  value: typing.Union[IResolvable, typing.List[SsmPatchBaselineGlobalFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource"></a>

```python
def put_source(
  value: typing.Union[IResolvable, typing.List[SsmPatchBaselineSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]

---

##### `reset_approval_rule` <a name="reset_approval_rule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule"></a>

```python
def reset_approval_rule() -> None
```

##### `reset_approved_patches` <a name="reset_approved_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```python
def reset_approved_patches() -> None
```

##### `reset_approved_patches_compliance_level` <a name="reset_approved_patches_compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```python
def reset_approved_patches_compliance_level() -> None
```

##### `reset_approved_patches_enable_non_security` <a name="reset_approved_patches_enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```python
def reset_approved_patches_enable_non_security() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_global_filter` <a name="reset_global_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter"></a>

```python
def reset_global_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operating_system` <a name="reset_operating_system" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```

##### `reset_rejected_patches` <a name="reset_rejected_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```python
def reset_rejected_patches() -> None
```

##### `reset_rejected_patches_action` <a name="reset_rejected_patches_action" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```python
def reset_rejected_patches_action() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule">approval_rule</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter">global_filter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput">approval_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">approved_patches_compliance_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">approved_patches_enable_non_security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">approved_patches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput">global_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">rejected_patches_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">rejected_patches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">approved_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">approved_patches_compliance_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approved_patches_enable_non_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">rejected_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">rejected_patches_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_rule`<sup>Required</sup> <a name="approval_rule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule"></a>

```python
approval_rule: SsmPatchBaselineApprovalRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `global_filter`<sup>Required</sup> <a name="global_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter"></a>

```python
global_filter: SsmPatchBaselineGlobalFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source"></a>

```python
source: SsmPatchBaselineSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a>

---

##### `approval_rule_input`<sup>Optional</sup> <a name="approval_rule_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput"></a>

```python
approval_rule_input: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]

---

##### `approved_patches_compliance_level_input`<sup>Optional</sup> <a name="approved_patches_compliance_level_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```python
approved_patches_compliance_level_input: str
```

- *Type:* str

---

##### `approved_patches_enable_non_security_input`<sup>Optional</sup> <a name="approved_patches_enable_non_security_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```python
approved_patches_enable_non_security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `approved_patches_input`<sup>Optional</sup> <a name="approved_patches_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```python
approved_patches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_filter_input`<sup>Optional</sup> <a name="global_filter_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput"></a>

```python
global_filter_input: typing.Union[IResolvable, typing.List[SsmPatchBaselineGlobalFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `rejected_patches_action_input`<sup>Optional</sup> <a name="rejected_patches_action_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```python
rejected_patches_action_input: str
```

- *Type:* str

---

##### `rejected_patches_input`<sup>Optional</sup> <a name="rejected_patches_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```python
rejected_patches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, typing.List[SsmPatchBaselineSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `approved_patches`<sup>Required</sup> <a name="approved_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```python
approved_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_patches_compliance_level`<sup>Required</sup> <a name="approved_patches_compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```python
approved_patches_compliance_level: str
```

- *Type:* str

---

##### `approved_patches_enable_non_security`<sup>Required</sup> <a name="approved_patches_enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```python
approved_patches_enable_non_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `rejected_patches`<sup>Required</sup> <a name="rejected_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```python
rejected_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rejected_patches_action`<sup>Required</sup> <a name="rejected_patches_action" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```python
rejected_patches_action: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRule <a name="SsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRule(
  patch_filter: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRulePatchFilter]],
  approve_after_days: typing.Union[int, float] = None,
  approve_until_date: str = None,
  compliance_level: str = None,
  enable_non_security: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter">patch_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]</code> | patch_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays">approve_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate">approve_until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel">compliance_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity">enable_non_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |

---

##### `patch_filter`<sup>Required</sup> <a name="patch_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter"></a>

```python
patch_filter: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRulePatchFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]

patch_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#patch_filter SsmPatchBaseline#patch_filter}

---

##### `approve_after_days`<sup>Optional</sup> <a name="approve_after_days" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays"></a>

```python
approve_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `approve_until_date`<sup>Optional</sup> <a name="approve_until_date" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate"></a>

```python
approve_until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `compliance_level`<sup>Optional</sup> <a name="compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel"></a>

```python
compliance_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `enable_non_security`<sup>Optional</sup> <a name="enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity"></a>

```python
enable_non_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

### SsmPatchBaselineApprovalRulePatchFilter <a name="SsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  approval_rule: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRule]] = None,
  approved_patches: typing.List[str] = None,
  approved_patches_compliance_level: str = None,
  approved_patches_enable_non_security: typing.Union[bool, IResolvable] = None,
  description: str = None,
  global_filter: typing.Union[IResolvable, typing.List[SsmPatchBaselineGlobalFilter]] = None,
  id: str = None,
  operating_system: str = None,
  rejected_patches: typing.List[str] = None,
  rejected_patches_action: str = None,
  source: typing.Union[IResolvable, typing.List[SsmPatchBaselineSource]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule">approval_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]</code> | approval_rule block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">approved_patches</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">approved_patches_compliance_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">approved_patches_enable_non_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter">global_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]</code> | global_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">operating_system</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">rejected_patches</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">rejected_patches_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `approval_rule`<sup>Optional</sup> <a name="approval_rule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule"></a>

```python
approval_rule: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]

approval_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}

---

##### `approved_patches`<sup>Optional</sup> <a name="approved_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```python
approved_patches: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}.

---

##### `approved_patches_compliance_level`<sup>Optional</sup> <a name="approved_patches_compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```python
approved_patches_compliance_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.

---

##### `approved_patches_enable_non_security`<sup>Optional</sup> <a name="approved_patches_enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```python
approved_patches_enable_non_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}.

---

##### `global_filter`<sup>Optional</sup> <a name="global_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter"></a>

```python
global_filter: typing.Union[IResolvable, typing.List[SsmPatchBaselineGlobalFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]

global_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}.

---

##### `rejected_patches`<sup>Optional</sup> <a name="rejected_patches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```python
rejected_patches: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}.

---

##### `rejected_patches_action`<sup>Optional</sup> <a name="rejected_patches_action" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```python
rejected_patches_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source"></a>

```python
source: typing.Union[IResolvable, typing.List[SsmPatchBaselineSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#source SsmPatchBaseline#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}.

---

### SsmPatchBaselineGlobalFilter <a name="SsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFilter(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSource <a name="SsmPatchBaselineSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineSource(
  configuration: str,
  name: str,
  products: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products">products</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRuleList <a name="SsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineApprovalRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>]]

---


### SsmPatchBaselineApprovalRuleOutputReference <a name="SsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter">put_patch_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays">reset_approve_after_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate">reset_approve_until_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel">reset_compliance_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity">reset_enable_non_security</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_patch_filter` <a name="put_patch_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter"></a>

```python
def put_patch_filter(
  value: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRulePatchFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]

---

##### `reset_approve_after_days` <a name="reset_approve_after_days" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays"></a>

```python
def reset_approve_after_days() -> None
```

##### `reset_approve_until_date` <a name="reset_approve_until_date" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate"></a>

```python
def reset_approve_until_date() -> None
```

##### `reset_compliance_level` <a name="reset_compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel"></a>

```python
def reset_compliance_level() -> None
```

##### `reset_enable_non_security` <a name="reset_enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity"></a>

```python
def reset_enable_non_security() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">patch_filter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput">approve_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput">approve_until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput">compliance_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput">enable_non_security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput">patch_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">approve_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">approve_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">compliance_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">enable_non_security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_filter`<sup>Required</sup> <a name="patch_filter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```python
patch_filter: SsmPatchBaselineApprovalRulePatchFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `approve_after_days_input`<sup>Optional</sup> <a name="approve_after_days_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput"></a>

```python
approve_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approve_until_date_input`<sup>Optional</sup> <a name="approve_until_date_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput"></a>

```python
approve_until_date_input: str
```

- *Type:* str

---

##### `compliance_level_input`<sup>Optional</sup> <a name="compliance_level_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput"></a>

```python
compliance_level_input: str
```

- *Type:* str

---

##### `enable_non_security_input`<sup>Optional</sup> <a name="enable_non_security_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput"></a>

```python
enable_non_security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `patch_filter_input`<sup>Optional</sup> <a name="patch_filter_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput"></a>

```python
patch_filter_input: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRulePatchFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]

---

##### `approve_after_days`<sup>Required</sup> <a name="approve_after_days" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```python
approve_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approve_until_date`<sup>Required</sup> <a name="approve_until_date" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```python
approve_until_date: str
```

- *Type:* str

---

##### `compliance_level`<sup>Required</sup> <a name="compliance_level" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```python
compliance_level: str
```

- *Type:* str

---

##### `enable_non_security`<sup>Required</sup> <a name="enable_non_security" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```python
enable_non_security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SsmPatchBaselineApprovalRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>, cdktf.IResolvable]

---


### SsmPatchBaselineApprovalRulePatchFilterList <a name="SsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineApprovalRulePatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmPatchBaselineApprovalRulePatchFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>]]

---


### SsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="SsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SsmPatchBaselineApprovalRulePatchFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>, cdktf.IResolvable]

---


### SsmPatchBaselineGlobalFilterList <a name="SsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineGlobalFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmPatchBaselineGlobalFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>]]

---


### SsmPatchBaselineGlobalFilterOutputReference <a name="SsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SsmPatchBaselineGlobalFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>, cdktf.IResolvable]

---


### SsmPatchBaselineSourceList <a name="SsmPatchBaselineSourceList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SsmPatchBaselineSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>]]

---


### SsmPatchBaselineSourceOutputReference <a name="SsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput">products_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products">products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `products_input`<sup>Optional</sup> <a name="products_input" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput"></a>

```python
products_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SsmPatchBaselineSource, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>, cdktf.IResolvable]

---



