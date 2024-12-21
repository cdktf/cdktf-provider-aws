# `appfabricIngestionDestination` Submodule <a name="`appfabricIngestionDestination` Submodule" id="@cdktf/provider-aws.appfabricIngestionDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricIngestionDestination <a name="AppfabricIngestionDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_bundle_arn: str,
  ingestion_arn: str,
  destination_configuration: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfiguration]] = None,
  processing_configuration: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfiguration]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppfabricIngestionDestinationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.ingestionArn">ingestion_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.destinationConfiguration">destination_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]</code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.processingConfiguration">processing_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]</code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.appBundleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}.

---

##### `ingestion_arn`<sup>Required</sup> <a name="ingestion_arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.ingestionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}.

---

##### `destination_configuration`<sup>Optional</sup> <a name="destination_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.destinationConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `processing_configuration`<sup>Optional</sup> <a name="processing_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.processingConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]

processing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration">put_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration">put_processing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetDestinationConfiguration">reset_destination_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetProcessingConfiguration">reset_processing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_configuration` <a name="put_destination_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration"></a>

```python
def put_destination_configuration(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]

---

##### `put_processing_configuration` <a name="put_processing_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration"></a>

```python
def put_processing_configuration(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#create AppfabricIngestionDestination#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#delete AppfabricIngestionDestination#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#update AppfabricIngestionDestination#update}

---

##### `reset_destination_configuration` <a name="reset_destination_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetDestinationConfiguration"></a>

```python
def reset_destination_configuration() -> None
```

##### `reset_processing_configuration` <a name="reset_processing_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetProcessingConfiguration"></a>

```python
def reset_processing_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppfabricIngestionDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppfabricIngestionDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricIngestionDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration">destination_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList">AppfabricIngestionDestinationDestinationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration">processing_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList">AppfabricIngestionDestinationProcessingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference">AppfabricIngestionDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput">app_bundle_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput">destination_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput">ingestion_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput">processing_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn">ingestion_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_configuration`<sup>Required</sup> <a name="destination_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration"></a>

```python
destination_configuration: AppfabricIngestionDestinationDestinationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList">AppfabricIngestionDestinationDestinationConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `processing_configuration`<sup>Required</sup> <a name="processing_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration"></a>

```python
processing_configuration: AppfabricIngestionDestinationProcessingConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList">AppfabricIngestionDestinationProcessingConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeouts"></a>

```python
timeouts: AppfabricIngestionDestinationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference">AppfabricIngestionDestinationTimeoutsOutputReference</a>

---

##### `app_bundle_arn_input`<sup>Optional</sup> <a name="app_bundle_arn_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput"></a>

```python
app_bundle_arn_input: str
```

- *Type:* str

---

##### `destination_configuration_input`<sup>Optional</sup> <a name="destination_configuration_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput"></a>

```python
destination_configuration_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]

---

##### `ingestion_arn_input`<sup>Optional</sup> <a name="ingestion_arn_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput"></a>

```python
ingestion_arn_input: str
```

- *Type:* str

---

##### `processing_configuration_input`<sup>Optional</sup> <a name="processing_configuration_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput"></a>

```python
processing_configuration_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppfabricIngestionDestinationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>]

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

---

##### `ingestion_arn`<sup>Required</sup> <a name="ingestion_arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn"></a>

```python
ingestion_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricIngestionDestinationConfig <a name="AppfabricIngestionDestinationConfig" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_bundle_arn: str,
  ingestion_arn: str,
  destination_configuration: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfiguration]] = None,
  processing_configuration: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfiguration]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppfabricIngestionDestinationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn">ingestion_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration">destination_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]</code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration">processing_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]</code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}.

---

##### `ingestion_arn`<sup>Required</sup> <a name="ingestion_arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn"></a>

```python
ingestion_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}.

---

##### `destination_configuration`<sup>Optional</sup> <a name="destination_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration"></a>

```python
destination_configuration: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `processing_configuration`<sup>Optional</sup> <a name="processing_configuration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration"></a>

```python
processing_configuration: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]

processing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.timeouts"></a>

```python
timeouts: AppfabricIngestionDestinationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}

---

### AppfabricIngestionDestinationDestinationConfiguration <a name="AppfabricIngestionDestinationDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration(
  audit_log: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLog]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog">audit_log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]</code> | audit_log block. |

---

##### `audit_log`<sup>Optional</sup> <a name="audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog"></a>

```python
audit_log: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLog <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog(
  destination: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]</code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination"></a>

```python
destination: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination(
  firehose_stream: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream]] = None,
  s3_bucket: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream">firehose_stream</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]</code> | firehose_stream block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket">s3_bucket</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]</code> | s3_bucket block. |

---

##### `firehose_stream`<sup>Optional</sup> <a name="firehose_stream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream"></a>

```python
firehose_stream: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]

firehose_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket"></a>

```python
s3_bucket: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream(
  stream_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}. |

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}.

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket(
  bucket_name: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}.

---

### AppfabricIngestionDestinationProcessingConfiguration <a name="AppfabricIngestionDestinationProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration(
  audit_log: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfigurationAuditLog]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog">audit_log</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]</code> | audit_log block. |

---

##### `audit_log`<sup>Optional</sup> <a name="audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog"></a>

```python
audit_log: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfigurationAuditLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationProcessingConfigurationAuditLog <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog(
  format: str,
  schema: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}.

---

### AppfabricIngestionDestinationTimeouts <a name="AppfabricIngestionDestinationTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#create AppfabricIngestionDestination#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#delete AppfabricIngestionDestination#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/appfabric_ingestion_destination#update AppfabricIngestionDestination#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream">put_firehose_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket">put_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream">reset_firehose_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_firehose_stream` <a name="put_firehose_stream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream"></a>

```python
def put_firehose_stream(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]

---

##### `put_s3_bucket` <a name="put_s3_bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket"></a>

```python
def put_s3_bucket(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]

---

##### `reset_firehose_stream` <a name="reset_firehose_stream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream"></a>

```python
def reset_firehose_stream() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream">firehose_stream</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput">firehose_stream_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firehose_stream`<sup>Required</sup> <a name="firehose_stream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream"></a>

```python
firehose_stream: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList</a>

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList</a>

---

##### `firehose_stream_input`<sup>Optional</sup> <a name="firehose_stream_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput"></a>

```python
firehose_stream_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>]]

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination"></a>

```python
def put_destination(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput">destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination"></a>

```python
destination: AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput"></a>

```python
destination_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationDestinationConfigurationAuditLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]

---


### AppfabricIngestionDestinationDestinationConfigurationList <a name="AppfabricIngestionDestinationDestinationConfigurationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationDestinationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]]

---


### AppfabricIngestionDestinationDestinationConfigurationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog">put_audit_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resetAuditLog">reset_audit_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_log` <a name="put_audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog"></a>

```python
def put_audit_log(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLog]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]

---

##### `reset_audit_log` <a name="reset_audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resetAuditLog"></a>

```python
def reset_audit_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog">audit_log</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList">AppfabricIngestionDestinationDestinationConfigurationAuditLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput">audit_log_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_log`<sup>Required</sup> <a name="audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog"></a>

```python
audit_log: AppfabricIngestionDestinationDestinationConfigurationAuditLogList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList">AppfabricIngestionDestinationDestinationConfigurationAuditLogList</a>

---

##### `audit_log_input`<sup>Optional</sup> <a name="audit_log_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput"></a>

```python
audit_log_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationDestinationConfigurationAuditLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationDestinationConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>]

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogList <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfigurationAuditLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationProcessingConfigurationAuditLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]

---


### AppfabricIngestionDestinationProcessingConfigurationList <a name="AppfabricIngestionDestinationProcessingConfigurationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricIngestionDestinationProcessingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]]

---


### AppfabricIngestionDestinationProcessingConfigurationOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog">put_audit_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resetAuditLog">reset_audit_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_log` <a name="put_audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog"></a>

```python
def put_audit_log(
  value: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfigurationAuditLog]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]

---

##### `reset_audit_log` <a name="reset_audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resetAuditLog"></a>

```python
def reset_audit_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog">audit_log</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList">AppfabricIngestionDestinationProcessingConfigurationAuditLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput">audit_log_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_log`<sup>Required</sup> <a name="audit_log" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog"></a>

```python
audit_log: AppfabricIngestionDestinationProcessingConfigurationAuditLogList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList">AppfabricIngestionDestinationProcessingConfigurationAuditLogList</a>

---

##### `audit_log_input`<sup>Optional</sup> <a name="audit_log_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput"></a>

```python
audit_log_input: typing.Union[IResolvable, typing.List[AppfabricIngestionDestinationProcessingConfigurationAuditLog]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationProcessingConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>]

---


### AppfabricIngestionDestinationTimeoutsOutputReference <a name="AppfabricIngestionDestinationTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_ingestion_destination

appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricIngestionDestinationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>]

---



