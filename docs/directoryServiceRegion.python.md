# `directoryServiceRegion` Submodule <a name="`directoryServiceRegion` Submodule" id="@cdktf/provider-aws.directoryServiceRegion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRegion <a name="DirectoryServiceRegion" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region aws_directory_service_region}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  region_name: str,
  vpc_settings: DirectoryServiceRegionVpcSettings,
  desired_number_of_domain_controllers: typing.Union[int, float] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DirectoryServiceRegionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.regionName">region_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | vpc_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.desiredNumberOfDomainControllers">desired_number_of_domain_controllers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}.

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.regionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}.

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_settings DirectoryServiceRegion#vpc_settings}

---

##### `desired_number_of_domain_controllers`<sup>Optional</sup> <a name="desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.desiredNumberOfDomainControllers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#timeouts DirectoryServiceRegion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings">put_vpc_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetDesiredNumberOfDomainControllers">reset_desired_number_of_domain_controllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}.

---

##### `put_vpc_settings` <a name="put_vpc_settings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings"></a>

```python
def put_vpc_settings(
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}.

---

##### `reset_desired_number_of_domain_controllers` <a name="reset_desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetDesiredNumberOfDomainControllers"></a>

```python
def reset_desired_number_of_domain_controllers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference">DirectoryServiceRegionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference">DirectoryServiceRegionVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllersInput">desired_number_of_domain_controllers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettingsInput">vpc_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllers">desired_number_of_domain_controllers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeouts"></a>

```python
timeouts: DirectoryServiceRegionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference">DirectoryServiceRegionTimeoutsOutputReference</a>

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettings"></a>

```python
vpc_settings: DirectoryServiceRegionVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference">DirectoryServiceRegionVpcSettingsOutputReference</a>

---

##### `desired_number_of_domain_controllers_input`<sup>Optional</sup> <a name="desired_number_of_domain_controllers_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllersInput"></a>

```python
desired_number_of_domain_controllers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DirectoryServiceRegionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_settings_input`<sup>Optional</sup> <a name="vpc_settings_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettingsInput"></a>

```python
vpc_settings_input: DirectoryServiceRegionVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---

##### `desired_number_of_domain_controllers`<sup>Required</sup> <a name="desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllers"></a>

```python
desired_number_of_domain_controllers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRegionConfig <a name="DirectoryServiceRegionConfig" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  region_name: str,
  vpc_settings: DirectoryServiceRegionVpcSettings,
  desired_number_of_domain_controllers: typing.Union[int, float] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DirectoryServiceRegionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.regionName">region_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | vpc_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.desiredNumberOfDomainControllers">desired_number_of_domain_controllers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}.

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}.

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.vpcSettings"></a>

```python
vpc_settings: DirectoryServiceRegionVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_settings DirectoryServiceRegion#vpc_settings}

---

##### `desired_number_of_domain_controllers`<sup>Optional</sup> <a name="desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.desiredNumberOfDomainControllers"></a>

```python
desired_number_of_domain_controllers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.timeouts"></a>

```python
timeouts: DirectoryServiceRegionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#timeouts DirectoryServiceRegion#timeouts}

---

### DirectoryServiceRegionTimeouts <a name="DirectoryServiceRegionTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}.

---

### DirectoryServiceRegionVpcSettings <a name="DirectoryServiceRegionVpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegionVpcSettings(
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}. |

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRegionTimeoutsOutputReference <a name="DirectoryServiceRegionTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DirectoryServiceRegionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>, cdktf.IResolvable]

---


### DirectoryServiceRegionVpcSettingsOutputReference <a name="DirectoryServiceRegionVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_region

directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DirectoryServiceRegionVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---



