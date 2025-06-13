# `eksAddon` Submodule <a name="`eksAddon` Submodule" id="@cdktf/provider-aws.eksAddon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksAddon <a name="EksAddon" id="@cdktf/provider-aws.eksAddon.EksAddon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon aws_eks_addon}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddon(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  addon_name: str,
  cluster_name: str,
  addon_version: str = None,
  configuration_values: str = None,
  id: str = None,
  pod_identity_association: typing.Union[IResolvable, typing.List[EksAddonPodIdentityAssociation]] = None,
  preserve: typing.Union[bool, IResolvable] = None,
  resolve_conflicts: str = None,
  resolve_conflicts_on_create: str = None,
  resolve_conflicts_on_update: str = None,
  service_account_role_arn: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EksAddonTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.addonName">addon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.addonVersion">addon_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.configurationValues">configuration_values</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#id EksAddon#id}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.podIdentityAssociation">pod_identity_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]</code> | pod_identity_association block. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.preserve">preserve</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#preserve EksAddon#preserve}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.resolveConflicts">resolve_conflicts</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.resolveConflictsOnCreate">resolve_conflicts_on_create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_create EksAddon#resolve_conflicts_on_create}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.resolveConflictsOnUpdate">resolve_conflicts_on_update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_update EksAddon#resolve_conflicts_on_update}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.serviceAccountRoleArn">service_account_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags EksAddon#tags}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags_all EksAddon#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.addonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}.

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}.

---

##### `addon_version`<sup>Optional</sup> <a name="addon_version" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.addonVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}.

---

##### `configuration_values`<sup>Optional</sup> <a name="configuration_values" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.configurationValues"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#id EksAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pod_identity_association`<sup>Optional</sup> <a name="pod_identity_association" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.podIdentityAssociation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]

pod_identity_association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#pod_identity_association EksAddon#pod_identity_association}

---

##### `preserve`<sup>Optional</sup> <a name="preserve" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.preserve"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#preserve EksAddon#preserve}.

---

##### `resolve_conflicts`<sup>Optional</sup> <a name="resolve_conflicts" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.resolveConflicts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}.

---

##### `resolve_conflicts_on_create`<sup>Optional</sup> <a name="resolve_conflicts_on_create" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.resolveConflictsOnCreate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_create EksAddon#resolve_conflicts_on_create}.

---

##### `resolve_conflicts_on_update`<sup>Optional</sup> <a name="resolve_conflicts_on_update" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.resolveConflictsOnUpdate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_update EksAddon#resolve_conflicts_on_update}.

---

##### `service_account_role_arn`<sup>Optional</sup> <a name="service_account_role_arn" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.serviceAccountRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags EksAddon#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags_all EksAddon#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAddon.EksAddon.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#timeouts EksAddon#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.putPodIdentityAssociation">put_pod_identity_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetAddonVersion">reset_addon_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetConfigurationValues">reset_configuration_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetPodIdentityAssociation">reset_pod_identity_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetPreserve">reset_preserve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetResolveConflicts">reset_resolve_conflicts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetResolveConflictsOnCreate">reset_resolve_conflicts_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetResolveConflictsOnUpdate">reset_resolve_conflicts_on_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetServiceAccountRoleArn">reset_service_account_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAddon.EksAddon.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.eksAddon.EksAddon.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksAddon.EksAddon.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAddon.EksAddon.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.eksAddon.EksAddon.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.eksAddon.EksAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.eksAddon.EksAddon.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.eksAddon.EksAddon.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.eksAddon.EksAddon.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.eksAddon.EksAddon.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.eksAddon.EksAddon.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.eksAddon.EksAddon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.eksAddon.EksAddon.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.eksAddon.EksAddon.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddon.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAddon.EksAddon.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.eksAddon.EksAddon.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddon.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.eksAddon.EksAddon.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.eksAddon.EksAddon.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksAddon.EksAddon.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.eksAddon.EksAddon.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddon.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pod_identity_association` <a name="put_pod_identity_association" id="@cdktf/provider-aws.eksAddon.EksAddon.putPodIdentityAssociation"></a>

```python
def put_pod_identity_association(
  value: typing.Union[IResolvable, typing.List[EksAddonPodIdentityAssociation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAddon.EksAddon.putPodIdentityAssociation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.eksAddon.EksAddon.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksAddon.EksAddon.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#create EksAddon#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksAddon.EksAddon.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#delete EksAddon#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.eksAddon.EksAddon.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#update EksAddon#update}.

---

##### `reset_addon_version` <a name="reset_addon_version" id="@cdktf/provider-aws.eksAddon.EksAddon.resetAddonVersion"></a>

```python
def reset_addon_version() -> None
```

##### `reset_configuration_values` <a name="reset_configuration_values" id="@cdktf/provider-aws.eksAddon.EksAddon.resetConfigurationValues"></a>

```python
def reset_configuration_values() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.eksAddon.EksAddon.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pod_identity_association` <a name="reset_pod_identity_association" id="@cdktf/provider-aws.eksAddon.EksAddon.resetPodIdentityAssociation"></a>

```python
def reset_pod_identity_association() -> None
```

##### `reset_preserve` <a name="reset_preserve" id="@cdktf/provider-aws.eksAddon.EksAddon.resetPreserve"></a>

```python
def reset_preserve() -> None
```

##### `reset_resolve_conflicts` <a name="reset_resolve_conflicts" id="@cdktf/provider-aws.eksAddon.EksAddon.resetResolveConflicts"></a>

```python
def reset_resolve_conflicts() -> None
```

##### `reset_resolve_conflicts_on_create` <a name="reset_resolve_conflicts_on_create" id="@cdktf/provider-aws.eksAddon.EksAddon.resetResolveConflictsOnCreate"></a>

```python
def reset_resolve_conflicts_on_create() -> None
```

##### `reset_resolve_conflicts_on_update` <a name="reset_resolve_conflicts_on_update" id="@cdktf/provider-aws.eksAddon.EksAddon.resetResolveConflictsOnUpdate"></a>

```python
def reset_resolve_conflicts_on_update() -> None
```

##### `reset_service_account_role_arn` <a name="reset_service_account_role_arn" id="@cdktf/provider-aws.eksAddon.EksAddon.resetServiceAccountRoleArn"></a>

```python
def reset_service_account_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.eksAddon.EksAddon.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.eksAddon.EksAddon.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.eksAddon.EksAddon.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EksAddon resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.eksAddon.EksAddon.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddon.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAddon.EksAddon.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.eksAddon.EksAddon.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddon.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAddon.EksAddon.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.eksAddon.EksAddon.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddon.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAddon.EksAddon.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.eksAddon.EksAddon.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddon.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EksAddon resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAddon.EksAddon.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.eksAddon.EksAddon.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EksAddon to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.eksAddon.EksAddon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EksAddon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAddon.EksAddon.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksAddon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.podIdentityAssociation">pod_identity_association</a></code> | <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList">EksAddonPodIdentityAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference">EksAddonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.addonNameInput">addon_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.addonVersionInput">addon_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.configurationValuesInput">configuration_values_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.podIdentityAssociationInput">pod_identity_association_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.preserveInput">preserve_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsInput">resolve_conflicts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnCreateInput">resolve_conflicts_on_create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnUpdateInput">resolve_conflicts_on_update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.serviceAccountRoleArnInput">service_account_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.addonName">addon_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.addonVersion">addon_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.configurationValues">configuration_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.preserve">preserve</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflicts">resolve_conflicts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnCreate">resolve_conflicts_on_create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnUpdate">resolve_conflicts_on_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.serviceAccountRoleArn">service_account_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksAddon.EksAddon.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.eksAddon.EksAddon.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAddon.EksAddon.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.eksAddon.EksAddon.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.eksAddon.EksAddon.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.eksAddon.EksAddon.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.eksAddon.EksAddon.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAddon.EksAddon.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAddon.EksAddon.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksAddon.EksAddon.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksAddon.EksAddon.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAddon.EksAddon.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAddon.EksAddon.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAddon.EksAddon.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.eksAddon.EksAddon.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.eksAddon.EksAddon.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-aws.eksAddon.EksAddon.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `pod_identity_association`<sup>Required</sup> <a name="pod_identity_association" id="@cdktf/provider-aws.eksAddon.EksAddon.property.podIdentityAssociation"></a>

```python
pod_identity_association: EksAddonPodIdentityAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList">EksAddonPodIdentityAssociationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAddon.EksAddon.property.timeouts"></a>

```python
timeouts: EksAddonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference">EksAddonTimeoutsOutputReference</a>

---

##### `addon_name_input`<sup>Optional</sup> <a name="addon_name_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.addonNameInput"></a>

```python
addon_name_input: str
```

- *Type:* str

---

##### `addon_version_input`<sup>Optional</sup> <a name="addon_version_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.addonVersionInput"></a>

```python
addon_version_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `configuration_values_input`<sup>Optional</sup> <a name="configuration_values_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.configurationValuesInput"></a>

```python
configuration_values_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pod_identity_association_input`<sup>Optional</sup> <a name="pod_identity_association_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.podIdentityAssociationInput"></a>

```python
pod_identity_association_input: typing.Union[IResolvable, typing.List[EksAddonPodIdentityAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]

---

##### `preserve_input`<sup>Optional</sup> <a name="preserve_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.preserveInput"></a>

```python
preserve_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resolve_conflicts_input`<sup>Optional</sup> <a name="resolve_conflicts_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsInput"></a>

```python
resolve_conflicts_input: str
```

- *Type:* str

---

##### `resolve_conflicts_on_create_input`<sup>Optional</sup> <a name="resolve_conflicts_on_create_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnCreateInput"></a>

```python
resolve_conflicts_on_create_input: str
```

- *Type:* str

---

##### `resolve_conflicts_on_update_input`<sup>Optional</sup> <a name="resolve_conflicts_on_update_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnUpdateInput"></a>

```python
resolve_conflicts_on_update_input: str
```

- *Type:* str

---

##### `service_account_role_arn_input`<sup>Optional</sup> <a name="service_account_role_arn_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.serviceAccountRoleArnInput"></a>

```python
service_account_role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.eksAddon.EksAddon.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EksAddonTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a>]

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="@cdktf/provider-aws.eksAddon.EksAddon.property.addonName"></a>

```python
addon_name: str
```

- *Type:* str

---

##### `addon_version`<sup>Required</sup> <a name="addon_version" id="@cdktf/provider-aws.eksAddon.EksAddon.property.addonVersion"></a>

```python
addon_version: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksAddon.EksAddon.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `configuration_values`<sup>Required</sup> <a name="configuration_values" id="@cdktf/provider-aws.eksAddon.EksAddon.property.configurationValues"></a>

```python
configuration_values: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddon.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `preserve`<sup>Required</sup> <a name="preserve" id="@cdktf/provider-aws.eksAddon.EksAddon.property.preserve"></a>

```python
preserve: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resolve_conflicts`<sup>Required</sup> <a name="resolve_conflicts" id="@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflicts"></a>

```python
resolve_conflicts: str
```

- *Type:* str

---

##### `resolve_conflicts_on_create`<sup>Required</sup> <a name="resolve_conflicts_on_create" id="@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnCreate"></a>

```python
resolve_conflicts_on_create: str
```

- *Type:* str

---

##### `resolve_conflicts_on_update`<sup>Required</sup> <a name="resolve_conflicts_on_update" id="@cdktf/provider-aws.eksAddon.EksAddon.property.resolveConflictsOnUpdate"></a>

```python
resolve_conflicts_on_update: str
```

- *Type:* str

---

##### `service_account_role_arn`<sup>Required</sup> <a name="service_account_role_arn" id="@cdktf/provider-aws.eksAddon.EksAddon.property.serviceAccountRoleArn"></a>

```python
service_account_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksAddon.EksAddon.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.eksAddon.EksAddon.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddon.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksAddon.EksAddon.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksAddonConfig <a name="EksAddonConfig" id="@cdktf/provider-aws.eksAddon.EksAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddonConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  addon_name: str,
  cluster_name: str,
  addon_version: str = None,
  configuration_values: str = None,
  id: str = None,
  pod_identity_association: typing.Union[IResolvable, typing.List[EksAddonPodIdentityAssociation]] = None,
  preserve: typing.Union[bool, IResolvable] = None,
  resolve_conflicts: str = None,
  resolve_conflicts_on_create: str = None,
  resolve_conflicts_on_update: str = None,
  service_account_role_arn: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EksAddonTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.addonName">addon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.addonVersion">addon_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.configurationValues">configuration_values</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#id EksAddon#id}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.podIdentityAssociation">pod_identity_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]</code> | pod_identity_association block. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.preserve">preserve</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#preserve EksAddon#preserve}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.resolveConflicts">resolve_conflicts</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.resolveConflictsOnCreate">resolve_conflicts_on_create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_create EksAddon#resolve_conflicts_on_create}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.resolveConflictsOnUpdate">resolve_conflicts_on_update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_update EksAddon#resolve_conflicts_on_update}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.serviceAccountRoleArn">service_account_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags EksAddon#tags}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags_all EksAddon#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.addonName"></a>

```python
addon_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}.

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}.

---

##### `addon_version`<sup>Optional</sup> <a name="addon_version" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.addonVersion"></a>

```python
addon_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}.

---

##### `configuration_values`<sup>Optional</sup> <a name="configuration_values" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.configurationValues"></a>

```python
configuration_values: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#id EksAddon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pod_identity_association`<sup>Optional</sup> <a name="pod_identity_association" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.podIdentityAssociation"></a>

```python
pod_identity_association: typing.Union[IResolvable, typing.List[EksAddonPodIdentityAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]

pod_identity_association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#pod_identity_association EksAddon#pod_identity_association}

---

##### `preserve`<sup>Optional</sup> <a name="preserve" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.preserve"></a>

```python
preserve: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#preserve EksAddon#preserve}.

---

##### `resolve_conflicts`<sup>Optional</sup> <a name="resolve_conflicts" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.resolveConflicts"></a>

```python
resolve_conflicts: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}.

---

##### `resolve_conflicts_on_create`<sup>Optional</sup> <a name="resolve_conflicts_on_create" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.resolveConflictsOnCreate"></a>

```python
resolve_conflicts_on_create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_create EksAddon#resolve_conflicts_on_create}.

---

##### `resolve_conflicts_on_update`<sup>Optional</sup> <a name="resolve_conflicts_on_update" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.resolveConflictsOnUpdate"></a>

```python
resolve_conflicts_on_update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#resolve_conflicts_on_update EksAddon#resolve_conflicts_on_update}.

---

##### `service_account_role_arn`<sup>Optional</sup> <a name="service_account_role_arn" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.serviceAccountRoleArn"></a>

```python
service_account_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags EksAddon#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#tags_all EksAddon#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAddon.EksAddonConfig.property.timeouts"></a>

```python
timeouts: EksAddonTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#timeouts EksAddon#timeouts}

---

### EksAddonPodIdentityAssociation <a name="EksAddonPodIdentityAssociation" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddonPodIdentityAssociation(
  role_arn: str,
  service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#role_arn EksAddon#role_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation.property.serviceAccount">service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#service_account EksAddon#service_account}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#role_arn EksAddon#role_arn}.

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#service_account EksAddon#service_account}.

---

### EksAddonTimeouts <a name="EksAddonTimeouts" id="@cdktf/provider-aws.eksAddon.EksAddonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAddon.EksAddonTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddonTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#create EksAddon#create}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#delete EksAddon#delete}. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#update EksAddon#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksAddon.EksAddonTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#create EksAddon#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksAddon.EksAddonTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#delete EksAddon#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.eksAddon.EksAddonTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/eks_addon#update EksAddon#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksAddonPodIdentityAssociationList <a name="EksAddonPodIdentityAssociationList" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddonPodIdentityAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EksAddonPodIdentityAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EksAddonPodIdentityAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]]

---


### EksAddonPodIdentityAssociationOutputReference <a name="EksAddonPodIdentityAssociationOutputReference" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddonPodIdentityAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EksAddonPodIdentityAssociation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAddon.EksAddonPodIdentityAssociation">EksAddonPodIdentityAssociation</a>]

---


### EksAddonTimeoutsOutputReference <a name="EksAddonTimeoutsOutputReference" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_addon

eksAddon.EksAddonTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksAddon.EksAddonTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EksAddonTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.eksAddon.EksAddonTimeouts">EksAddonTimeouts</a>]

---



