# `fmsPolicy` Submodule <a name="`fmsPolicy` Submodule" id="@cdktf/provider-aws.fmsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsPolicy <a name="FmsPolicy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy aws_fms_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exclude_resource_tags: typing.Union[bool, IResolvable],
  name: str,
  security_service_policy_data: FmsPolicySecurityServicePolicyData,
  delete_all_policy_resources: typing.Union[bool, IResolvable] = None,
  delete_unused_fm_managed_resources: typing.Union[bool, IResolvable] = None,
  description: str = None,
  exclude_map: FmsPolicyExcludeMap = None,
  id: str = None,
  include_map: FmsPolicyIncludeMap = None,
  remediation_enabled: typing.Union[bool, IResolvable] = None,
  resource_tags: typing.Mapping[str] = None,
  resource_type: str = None,
  resource_type_list: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.excludeResourceTags">exclude_resource_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#name FmsPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.securityServicePolicyData">security_service_policy_data</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | security_service_policy_data block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.deleteAllPolicyResources">delete_all_policy_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.deleteUnusedFmManagedResources">delete_unused_fm_managed_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#description FmsPolicy#description}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.excludeMap">exclude_map</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | exclude_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#id FmsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.includeMap">include_map</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | include_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.remediationEnabled">remediation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTypeList">resource_type_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags FmsPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags_all FmsPolicy#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.excludeResourceTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#name FmsPolicy#name}.

---

##### `security_service_policy_data`<sup>Required</sup> <a name="security_service_policy_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.securityServicePolicyData"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

security_service_policy_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `delete_all_policy_resources`<sup>Optional</sup> <a name="delete_all_policy_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.deleteAllPolicyResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `delete_unused_fm_managed_resources`<sup>Optional</sup> <a name="delete_unused_fm_managed_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.deleteUnusedFmManagedResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#description FmsPolicy#description}.

---

##### `exclude_map`<sup>Optional</sup> <a name="exclude_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.excludeMap"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

exclude_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#id FmsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_map`<sup>Optional</sup> <a name="include_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.includeMap"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

include_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#include_map FmsPolicy#include_map}

---

##### `remediation_enabled`<sup>Optional</sup> <a name="remediation_enabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.remediationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}.

---

##### `resource_type_list`<sup>Optional</sup> <a name="resource_type_list" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTypeList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags FmsPolicy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags_all FmsPolicy#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap">put_exclude_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap">put_include_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData">put_security_service_policy_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources">reset_delete_all_policy_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources">reset_delete_unused_fm_managed_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap">reset_exclude_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap">reset_include_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled">reset_remediation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList">reset_resource_type_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude_map` <a name="put_exclude_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap"></a>

```python
def put_exclude_map(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap.parameter.account"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

###### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap.parameter.orgunit"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

##### `put_include_map` <a name="put_include_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap"></a>

```python
def put_include_map(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap.parameter.account"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

###### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap.parameter.orgunit"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

##### `put_security_service_policy_data` <a name="put_security_service_policy_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData"></a>

```python
def put_security_service_policy_data(
  type: str,
  managed_service_data: str = None,
  policy_option: FmsPolicySecurityServicePolicyDataPolicyOption = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#type FmsPolicy#type}.

---

###### `managed_service_data`<sup>Optional</sup> <a name="managed_service_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.managedServiceData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}.

---

###### `policy_option`<sup>Optional</sup> <a name="policy_option" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.policyOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#policy_option FmsPolicy#policy_option}

---

##### `reset_delete_all_policy_resources` <a name="reset_delete_all_policy_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources"></a>

```python
def reset_delete_all_policy_resources() -> None
```

##### `reset_delete_unused_fm_managed_resources` <a name="reset_delete_unused_fm_managed_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources"></a>

```python
def reset_delete_unused_fm_managed_resources() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_map` <a name="reset_exclude_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap"></a>

```python
def reset_exclude_map() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_map` <a name="reset_include_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap"></a>

```python
def reset_include_map() -> None
```

##### `reset_remediation_enabled` <a name="reset_remediation_enabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled"></a>

```python
def reset_remediation_enabled() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_resource_type_list` <a name="reset_resource_type_list" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList"></a>

```python
def reset_resource_type_list() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FmsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FmsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FmsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FmsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FmsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap">exclude_map</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap">include_map</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken">policy_update_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData">security_service_policy_data</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput">delete_all_policy_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput">delete_unused_fm_managed_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput">exclude_map_input</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput">exclude_resource_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput">include_map_input</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput">remediation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput">resource_type_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput">security_service_policy_data_input</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources">delete_all_policy_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources">delete_unused_fm_managed_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags">exclude_resource_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled">remediation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList">resource_type_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `exclude_map`<sup>Required</sup> <a name="exclude_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap"></a>

```python
exclude_map: FmsPolicyExcludeMapOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a>

---

##### `include_map`<sup>Required</sup> <a name="include_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap"></a>

```python
include_map: FmsPolicyIncludeMapOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a>

---

##### `policy_update_token`<sup>Required</sup> <a name="policy_update_token" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken"></a>

```python
policy_update_token: str
```

- *Type:* str

---

##### `security_service_policy_data`<sup>Required</sup> <a name="security_service_policy_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData"></a>

```python
security_service_policy_data: FmsPolicySecurityServicePolicyDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a>

---

##### `delete_all_policy_resources_input`<sup>Optional</sup> <a name="delete_all_policy_resources_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput"></a>

```python
delete_all_policy_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_unused_fm_managed_resources_input`<sup>Optional</sup> <a name="delete_unused_fm_managed_resources_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput"></a>

```python
delete_unused_fm_managed_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_map_input`<sup>Optional</sup> <a name="exclude_map_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput"></a>

```python
exclude_map_input: FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `exclude_resource_tags_input`<sup>Optional</sup> <a name="exclude_resource_tags_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput"></a>

```python
exclude_resource_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_map_input`<sup>Optional</sup> <a name="include_map_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput"></a>

```python
include_map_input: FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remediation_enabled_input`<sup>Optional</sup> <a name="remediation_enabled_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput"></a>

```python
remediation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_type_list_input`<sup>Optional</sup> <a name="resource_type_list_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput"></a>

```python
resource_type_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_service_policy_data_input`<sup>Optional</sup> <a name="security_service_policy_data_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput"></a>

```python
security_service_policy_data_input: FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_all_policy_resources`<sup>Required</sup> <a name="delete_all_policy_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources"></a>

```python
delete_all_policy_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_unused_fm_managed_resources`<sup>Required</sup> <a name="delete_unused_fm_managed_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources"></a>

```python
delete_unused_fm_managed_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags"></a>

```python
exclude_resource_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled"></a>

```python
remediation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_type_list`<sup>Required</sup> <a name="resource_type_list" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList"></a>

```python
resource_type_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FmsPolicyConfig <a name="FmsPolicyConfig" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exclude_resource_tags: typing.Union[bool, IResolvable],
  name: str,
  security_service_policy_data: FmsPolicySecurityServicePolicyData,
  delete_all_policy_resources: typing.Union[bool, IResolvable] = None,
  delete_unused_fm_managed_resources: typing.Union[bool, IResolvable] = None,
  description: str = None,
  exclude_map: FmsPolicyExcludeMap = None,
  id: str = None,
  include_map: FmsPolicyIncludeMap = None,
  remediation_enabled: typing.Union[bool, IResolvable] = None,
  resource_tags: typing.Mapping[str] = None,
  resource_type: str = None,
  resource_type_list: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags">exclude_resource_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#name FmsPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData">security_service_policy_data</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | security_service_policy_data block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources">delete_all_policy_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources">delete_unused_fm_managed_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#description FmsPolicy#description}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap">exclude_map</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | exclude_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#id FmsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap">include_map</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | include_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled">remediation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList">resource_type_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags FmsPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags_all FmsPolicy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags"></a>

```python
exclude_resource_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#name FmsPolicy#name}.

---

##### `security_service_policy_data`<sup>Required</sup> <a name="security_service_policy_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData"></a>

```python
security_service_policy_data: FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

security_service_policy_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `delete_all_policy_resources`<sup>Optional</sup> <a name="delete_all_policy_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources"></a>

```python
delete_all_policy_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `delete_unused_fm_managed_resources`<sup>Optional</sup> <a name="delete_unused_fm_managed_resources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources"></a>

```python
delete_unused_fm_managed_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#description FmsPolicy#description}.

---

##### `exclude_map`<sup>Optional</sup> <a name="exclude_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap"></a>

```python
exclude_map: FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

exclude_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#id FmsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_map`<sup>Optional</sup> <a name="include_map" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap"></a>

```python
include_map: FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

include_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#include_map FmsPolicy#include_map}

---

##### `remediation_enabled`<sup>Optional</sup> <a name="remediation_enabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled"></a>

```python
remediation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}.

---

##### `resource_type_list`<sup>Optional</sup> <a name="resource_type_list" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList"></a>

```python
resource_type_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags FmsPolicy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#tags_all FmsPolicy#tags_all}.

---

### FmsPolicyExcludeMap <a name="FmsPolicyExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicyExcludeMap(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account">account</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

##### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicyIncludeMap <a name="FmsPolicyIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicyIncludeMap(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account">account</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

##### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicySecurityServicePolicyData <a name="FmsPolicySecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyData(
  type: str,
  managed_service_data: str = None,
  policy_option: FmsPolicySecurityServicePolicyDataPolicyOption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#type FmsPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData">managed_service_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.policyOption">policy_option</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a></code> | policy_option block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#type FmsPolicy#type}.

---

##### `managed_service_data`<sup>Optional</sup> <a name="managed_service_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData"></a>

```python
managed_service_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}.

---

##### `policy_option`<sup>Optional</sup> <a name="policy_option" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.policyOption"></a>

```python
policy_option: FmsPolicySecurityServicePolicyDataPolicyOption
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#policy_option FmsPolicy#policy_option}

---

### FmsPolicySecurityServicePolicyDataPolicyOption <a name="FmsPolicySecurityServicePolicyDataPolicyOption" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption(
  network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy = None,
  third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.networkFirewallPolicy">network_firewall_policy</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a></code> | network_firewall_policy block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.thirdPartyFirewallPolicy">third_party_firewall_policy</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a></code> | third_party_firewall_policy block. |

---

##### `network_firewall_policy`<sup>Optional</sup> <a name="network_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.networkFirewallPolicy"></a>

```python
network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

network_firewall_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#network_firewall_policy FmsPolicy#network_firewall_policy}

---

##### `third_party_firewall_policy`<sup>Optional</sup> <a name="third_party_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.thirdPartyFirewallPolicy"></a>

```python
third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

third_party_firewall_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#third_party_firewall_policy FmsPolicy#third_party_firewall_policy}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy(
  firewall_deployment_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}. |

---

##### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}.

---

### FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy <a name="FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy(
  firewall_deployment_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}. |

---

##### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}.

---

## Classes <a name="Classes" id="Classes"></a>

### FmsPolicyExcludeMapOutputReference <a name="FmsPolicyExcludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicyExcludeMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit">reset_orgunit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_orgunit` <a name="reset_orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit"></a>

```python
def reset_orgunit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput">account_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput">orgunit_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account">account</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput"></a>

```python
account_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit_input`<sup>Optional</sup> <a name="orgunit_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput"></a>

```python
orgunit_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit`<sup>Required</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue"></a>

```python
internal_value: FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---


### FmsPolicyIncludeMapOutputReference <a name="FmsPolicyIncludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicyIncludeMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit">reset_orgunit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_orgunit` <a name="reset_orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit"></a>

```python
def reset_orgunit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput">account_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput">orgunit_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account">account</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput"></a>

```python
account_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit_input`<sup>Optional</sup> <a name="orgunit_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput"></a>

```python
orgunit_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit`<sup>Required</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue"></a>

```python
internal_value: FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---


### FmsPolicySecurityServicePolicyDataOutputReference <a name="FmsPolicySecurityServicePolicyDataOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption">put_policy_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData">reset_managed_service_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetPolicyOption">reset_policy_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_option` <a name="put_policy_option" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption"></a>

```python
def put_policy_option(
  network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy = None,
  third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy = None
) -> None
```

###### `network_firewall_policy`<sup>Optional</sup> <a name="network_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption.parameter.networkFirewallPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

network_firewall_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#network_firewall_policy FmsPolicy#network_firewall_policy}

---

###### `third_party_firewall_policy`<sup>Optional</sup> <a name="third_party_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption.parameter.thirdPartyFirewallPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

third_party_firewall_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#third_party_firewall_policy FmsPolicy#third_party_firewall_policy}

---

##### `reset_managed_service_data` <a name="reset_managed_service_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData"></a>

```python
def reset_managed_service_data() -> None
```

##### `reset_policy_option` <a name="reset_policy_option" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetPolicyOption"></a>

```python
def reset_policy_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOption">policy_option</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput">managed_service_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOptionInput">policy_option_input</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData">managed_service_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_option`<sup>Required</sup> <a name="policy_option" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOption"></a>

```python
policy_option: FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference</a>

---

##### `managed_service_data_input`<sup>Optional</sup> <a name="managed_service_data_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput"></a>

```python
managed_service_data_input: str
```

- *Type:* str

---

##### `policy_option_input`<sup>Optional</sup> <a name="policy_option_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOptionInput"></a>

```python
policy_option_input: FmsPolicySecurityServicePolicyDataPolicyOption
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `managed_service_data`<sup>Required</sup> <a name="managed_service_data" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData"></a>

```python
managed_service_data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue"></a>

```python
internal_value: FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resetFirewallDeploymentModel">reset_firewall_deployment_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_firewall_deployment_model` <a name="reset_firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resetFirewallDeploymentModel"></a>

```python
def reset_firewall_deployment_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModelInput">firewall_deployment_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_deployment_model_input`<sup>Optional</sup> <a name="firewall_deployment_model_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModelInput"></a>

```python
firewall_deployment_model_input: str
```

- *Type:* str

---

##### `firewall_deployment_model`<sup>Required</sup> <a name="firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkFirewallPolicy">put_network_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putThirdPartyFirewallPolicy">put_third_party_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetNetworkFirewallPolicy">reset_network_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetThirdPartyFirewallPolicy">reset_third_party_firewall_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_firewall_policy` <a name="put_network_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkFirewallPolicy"></a>

```python
def put_network_firewall_policy(
  firewall_deployment_model: str = None
) -> None
```

###### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkFirewallPolicy.parameter.firewallDeploymentModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}.

---

##### `put_third_party_firewall_policy` <a name="put_third_party_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putThirdPartyFirewallPolicy"></a>

```python
def put_third_party_firewall_policy(
  firewall_deployment_model: str = None
) -> None
```

###### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putThirdPartyFirewallPolicy.parameter.firewallDeploymentModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}.

---

##### `reset_network_firewall_policy` <a name="reset_network_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetNetworkFirewallPolicy"></a>

```python
def reset_network_firewall_policy() -> None
```

##### `reset_third_party_firewall_policy` <a name="reset_third_party_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetThirdPartyFirewallPolicy"></a>

```python
def reset_third_party_firewall_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicy">network_firewall_policy</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicy">third_party_firewall_policy</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicyInput">network_firewall_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicyInput">third_party_firewall_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_firewall_policy`<sup>Required</sup> <a name="network_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicy"></a>

```python
network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference</a>

---

##### `third_party_firewall_policy`<sup>Required</sup> <a name="third_party_firewall_policy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicy"></a>

```python
third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference</a>

---

##### `network_firewall_policy_input`<sup>Optional</sup> <a name="network_firewall_policy_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicyInput"></a>

```python
network_firewall_policy_input: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

---

##### `third_party_firewall_policy_input`<sup>Optional</sup> <a name="third_party_firewall_policy_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicyInput"></a>

```python
third_party_firewall_policy_input: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.internalValue"></a>

```python
internal_value: FmsPolicySecurityServicePolicyDataPolicyOption
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resetFirewallDeploymentModel">reset_firewall_deployment_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_firewall_deployment_model` <a name="reset_firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resetFirewallDeploymentModel"></a>

```python
def reset_firewall_deployment_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModelInput">firewall_deployment_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_deployment_model_input`<sup>Optional</sup> <a name="firewall_deployment_model_input" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModelInput"></a>

```python
firewall_deployment_model_input: str
```

- *Type:* str

---

##### `firewall_deployment_model`<sup>Required</sup> <a name="firewall_deployment_model" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

---



