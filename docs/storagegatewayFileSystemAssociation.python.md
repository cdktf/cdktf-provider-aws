# `storagegatewayFileSystemAssociation` Submodule <a name="`storagegatewayFileSystemAssociation` Submodule" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayFileSystemAssociation <a name="StoragegatewayFileSystemAssociation" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association aws_storagegateway_file_system_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  location_arn: str,
  password: str,
  username: str,
  audit_destination_arn: str = None,
  cache_attributes: StoragegatewayFileSystemAssociationCacheAttributes = None,
  id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: StoragegatewayFileSystemAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.locationArn">location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.gatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}.

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.locationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}.

---

##### `audit_destination_arn`<sup>Optional</sup> <a name="audit_destination_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.auditDestinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}.

---

##### `cache_attributes`<sup>Optional</sup> <a name="cache_attributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.cacheAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#region StoragegatewayFileSystemAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#timeouts StoragegatewayFileSystemAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes">put_cache_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn">reset_audit_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes">reset_cache_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cache_attributes` <a name="put_cache_attributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes"></a>

```python
def put_cache_attributes(
  cache_stale_timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `cache_stale_timeout_in_seconds`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes.parameter.cacheStaleTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}.

---

##### `reset_audit_destination_arn` <a name="reset_audit_destination_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn"></a>

```python
def reset_audit_destination_arn() -> None
```

##### `reset_cache_attributes` <a name="reset_cache_attributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes"></a>

```python
def reset_cache_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StoragegatewayFileSystemAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StoragegatewayFileSystemAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StoragegatewayFileSystemAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StoragegatewayFileSystemAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StoragegatewayFileSystemAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference">StoragegatewayFileSystemAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput">audit_destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput">cache_attributes_input</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput">location_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cache_attributes`<sup>Required</sup> <a name="cache_attributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes"></a>

```python
cache_attributes: StoragegatewayFileSystemAssociationCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeouts"></a>

```python
timeouts: StoragegatewayFileSystemAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference">StoragegatewayFileSystemAssociationTimeoutsOutputReference</a>

---

##### `audit_destination_arn_input`<sup>Optional</sup> <a name="audit_destination_arn_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput"></a>

```python
audit_destination_arn_input: str
```

- *Type:* str

---

##### `cache_attributes_input`<sup>Optional</sup> <a name="cache_attributes_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput"></a>

```python
cache_attributes_input: StoragegatewayFileSystemAssociationCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_arn_input`<sup>Optional</sup> <a name="location_arn_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput"></a>

```python
location_arn_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StoragegatewayFileSystemAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `audit_destination_arn`<sup>Required</sup> <a name="audit_destination_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayFileSystemAssociationCacheAttributes <a name="StoragegatewayFileSystemAssociationCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes(
  cache_stale_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}. |

---

##### `cache_stale_timeout_in_seconds`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}.

---

### StoragegatewayFileSystemAssociationConfig <a name="StoragegatewayFileSystemAssociationConfig" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  location_arn: str,
  password: str,
  username: str,
  audit_destination_arn: str = None,
  cache_attributes: StoragegatewayFileSystemAssociationCacheAttributes = None,
  id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: StoragegatewayFileSystemAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn">location_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}.

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}.

---

##### `audit_destination_arn`<sup>Optional</sup> <a name="audit_destination_arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}.

---

##### `cache_attributes`<sup>Optional</sup> <a name="cache_attributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes"></a>

```python
cache_attributes: StoragegatewayFileSystemAssociationCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#region StoragegatewayFileSystemAssociation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.timeouts"></a>

```python
timeouts: StoragegatewayFileSystemAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#timeouts StoragegatewayFileSystemAssociation#timeouts}

---

### StoragegatewayFileSystemAssociationTimeouts <a name="StoragegatewayFileSystemAssociationTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayFileSystemAssociationCacheAttributesOutputReference <a name="StoragegatewayFileSystemAssociationCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">reset_cache_stale_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_stale_timeout_in_seconds` <a name="reset_cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```python
def reset_cache_stale_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">cache_stale_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_stale_timeout_in_seconds_input`<sup>Optional</sup> <a name="cache_stale_timeout_in_seconds_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```python
cache_stale_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_stale_timeout_in_seconds`<sup>Required</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue"></a>

```python
internal_value: StoragegatewayFileSystemAssociationCacheAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---


### StoragegatewayFileSystemAssociationTimeoutsOutputReference <a name="StoragegatewayFileSystemAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import storagegateway_file_system_association

storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StoragegatewayFileSystemAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>]

---



