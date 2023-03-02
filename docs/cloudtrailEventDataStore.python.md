# `cloudtrailEventDataStore` Submodule <a name="`cloudtrailEventDataStore` Submodule" id="@cdktf/provider-aws.cloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailEventDataStore <a name="CloudtrailEventDataStore" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store aws_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStore(
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
  advanced_event_selector: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelector]] = None,
  id: str = None,
  multi_region_enabled: typing.Union[bool, IResolvable] = None,
  organization_enabled: typing.Union[bool, IResolvable] = None,
  retention_period: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  termination_protection_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: CloudtrailEventDataStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.advancedEventSelector">advanced_event_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.multiRegionEnabled">multi_region_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.organizationEnabled">organization_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

##### `advanced_event_selector`<sup>Optional</sup> <a name="advanced_event_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.advancedEventSelector"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_region_enabled`<sup>Optional</sup> <a name="multi_region_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.multiRegionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}.

---

##### `organization_enabled`<sup>Optional</sup> <a name="organization_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.organizationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.retentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}.

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector">put_advanced_event_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector">reset_advanced_event_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled">reset_multi_region_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled">reset_organization_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod">reset_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled">reset_termination_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_advanced_event_selector` <a name="put_advanced_event_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector"></a>

```python
def put_advanced_event_selector(
  value: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}.

---

##### `reset_advanced_event_selector` <a name="reset_advanced_event_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector"></a>

```python
def reset_advanced_event_selector() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multi_region_enabled` <a name="reset_multi_region_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled"></a>

```python
def reset_multi_region_enabled() -> None
```

##### `reset_organization_enabled` <a name="reset_organization_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled"></a>

```python
def reset_organization_enabled() -> None
```

##### `reset_retention_period` <a name="reset_retention_period" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod"></a>

```python
def reset_retention_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_termination_protection_enabled` <a name="reset_termination_protection_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled"></a>

```python
def reset_termination_protection_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector">advanced_event_selector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput">advanced_event_selector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput">multi_region_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput">organization_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput">retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput">termination_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled">multi_region_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled">organization_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_event_selector`<sup>Required</sup> <a name="advanced_event_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector"></a>

```python
advanced_event_selector: CloudtrailEventDataStoreAdvancedEventSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts"></a>

```python
timeouts: CloudtrailEventDataStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a>

---

##### `advanced_event_selector_input`<sup>Optional</sup> <a name="advanced_event_selector_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput"></a>

```python
advanced_event_selector_input: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_region_enabled_input`<sup>Optional</sup> <a name="multi_region_enabled_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput"></a>

```python
multi_region_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_enabled_input`<sup>Optional</sup> <a name="organization_enabled_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput"></a>

```python
organization_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_input`<sup>Optional</sup> <a name="retention_period_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput"></a>

```python
retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_protection_enabled_input`<sup>Optional</sup> <a name="termination_protection_enabled_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput"></a>

```python
termination_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudtrailEventDataStoreTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_region_enabled`<sup>Required</sup> <a name="multi_region_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled"></a>

```python
multi_region_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_enabled`<sup>Required</sup> <a name="organization_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled"></a>

```python
organization_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `termination_protection_enabled`<sup>Required</sup> <a name="termination_protection_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailEventDataStoreAdvancedEventSelector <a name="CloudtrailEventDataStoreAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector(
  field_selector: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector]] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector">field_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]</code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |

---

##### `field_selector`<sup>Optional</sup> <a name="field_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector"></a>

```python
field_selector: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field_selector CloudtrailEventDataStore#field_selector}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector(
  ends_with: typing.List[str] = None,
  equal_to: typing.List[str] = None,
  field: str = None,
  not_ends_with: typing.List[str] = None,
  not_equals: typing.List[str] = None,
  not_starts_with: typing.List[str] = None,
  starts_with: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}. |

---

##### `ends_with`<sup>Optional</sup> <a name="ends_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}.

---

##### `equal_to`<sup>Optional</sup> <a name="equal_to" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}.

---

##### `not_ends_with`<sup>Optional</sup> <a name="not_ends_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}.

---

##### `not_equals`<sup>Optional</sup> <a name="not_equals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}.

---

##### `not_starts_with`<sup>Optional</sup> <a name="not_starts_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}.

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}.

---

### CloudtrailEventDataStoreConfig <a name="CloudtrailEventDataStoreConfig" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  advanced_event_selector: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelector]] = None,
  id: str = None,
  multi_region_enabled: typing.Union[bool, IResolvable] = None,
  organization_enabled: typing.Union[bool, IResolvable] = None,
  retention_period: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  termination_protection_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: CloudtrailEventDataStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector">advanced_event_selector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled">multi_region_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled">organization_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod">retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

##### `advanced_event_selector`<sup>Optional</sup> <a name="advanced_event_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector"></a>

```python
advanced_event_selector: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_region_enabled`<sup>Optional</sup> <a name="multi_region_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled"></a>

```python
multi_region_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}.

---

##### `organization_enabled`<sup>Optional</sup> <a name="organization_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled"></a>

```python
organization_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}.

---

##### `retention_period`<sup>Optional</sup> <a name="retention_period" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod"></a>

```python
retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}.

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts"></a>

```python
timeouts: CloudtrailEventDataStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}

---

### CloudtrailEventDataStoreTimeouts <a name="CloudtrailEventDataStoreTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]

---


### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">reset_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">reset_equal_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">reset_not_ends_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">reset_not_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">reset_not_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">reset_starts_with</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ends_with` <a name="reset_ends_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```python
def reset_ends_with() -> None
```

##### `reset_equal_to` <a name="reset_equal_to" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```python
def reset_equal_to() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_not_ends_with` <a name="reset_not_ends_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```python
def reset_not_ends_with() -> None
```

##### `reset_not_equals` <a name="reset_not_equals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```python
def reset_not_equals() -> None
```

##### `reset_not_starts_with` <a name="reset_not_starts_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```python
def reset_not_starts_with() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">ends_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">equal_to_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">not_ends_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">not_equals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">not_starts_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">starts_with_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ends_with_input`<sup>Optional</sup> <a name="ends_with_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```python
ends_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to_input`<sup>Optional</sup> <a name="equal_to_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```python
equal_to_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `not_ends_with_input`<sup>Optional</sup> <a name="not_ends_with_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```python
not_ends_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals_input`<sup>Optional</sup> <a name="not_equals_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```python
not_equals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with_input`<sup>Optional</sup> <a name="not_starts_with_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```python
not_starts_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```python
starts_with_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ends_with`<sup>Required</sup> <a name="ends_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `not_ends_with`<sup>Required</sup> <a name="not_ends_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals`<sup>Required</sup> <a name="not_equals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with`<sup>Required</sup> <a name="not_starts_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>, cdktf.IResolvable]

---


### CloudtrailEventDataStoreAdvancedEventSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudtrailEventDataStoreAdvancedEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>]]

---


### CloudtrailEventDataStoreAdvancedEventSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector">put_field_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector">reset_field_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_selector` <a name="put_field_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```python
def put_field_selector(
  value: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]

---

##### `reset_field_selector` <a name="reset_field_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector"></a>

```python
def reset_field_selector() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector">field_selector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput">field_selector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_selector`<sup>Required</sup> <a name="field_selector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```python
field_selector: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a>

---

##### `field_selector_input`<sup>Optional</sup> <a name="field_selector_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```python
field_selector_input: typing.Union[IResolvable, typing.List[CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailEventDataStoreAdvancedEventSelector, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>, cdktf.IResolvable]

---


### CloudtrailEventDataStoreTimeoutsOutputReference <a name="CloudtrailEventDataStoreTimeoutsOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_event_data_store

cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudtrailEventDataStoreTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>, cdktf.IResolvable]

---



