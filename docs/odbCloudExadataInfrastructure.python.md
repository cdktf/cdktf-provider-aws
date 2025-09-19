# `odbCloudExadataInfrastructure` Submodule <a name="`odbCloudExadataInfrastructure` Submodule" id="@cdktf/provider-aws.odbCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudExadataInfrastructure <a name="OdbCloudExadataInfrastructure" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure aws_odb_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone_id: str,
  display_name: str,
  shape: str,
  availability_zone: str = None,
  compute_count: typing.Union[int, float] = None,
  customer_contacts_to_send_to_oci: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureCustomerContactsToSendToOci]] = None,
  database_server_type: str = None,
  maintenance_window: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindow]] = None,
  region: str = None,
  storage_count: typing.Union[int, float] = None,
  storage_server_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OdbCloudExadataInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the AZ where the Exadata infrastructure is located. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly name for the Exadata infrastructure. Changing this will force terraform to create a new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.shape">shape</a></code> | <code>str</code> | The model name of the Exadata infrastructure. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The name of the Availability Zone (AZ) where the Exadata infrastructure is located. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | The number of compute instances that the Exadata infrastructure is located. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]</code> | The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.databaseServerType">database_server_type</a></code> | <code>str</code> | The database server model type of the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | TThe number of storage servers that are activated for the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageServerType">storage_server_type</a></code> | <code>str</code> | The storage server model type of the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

The AZ ID of the AZ where the Exadata infrastructure is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id OdbCloudExadataInfrastructure#availability_zone_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly name for the Exadata infrastructure. Changing this will force terraform to create a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#display_name OdbCloudExadataInfrastructure#display_name}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.shape"></a>

- *Type:* str

The model name of the Exadata infrastructure. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#shape OdbCloudExadataInfrastructure#shape}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The name of the Availability Zone (AZ) where the Exadata infrastructure is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone OdbCloudExadataInfrastructure#availability_zone}

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

The number of compute instances that the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#compute_count OdbCloudExadataInfrastructure#compute_count}

---

##### `customer_contacts_to_send_to_oci`<sup>Optional</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.customerContactsToSendToOci"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]

The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci OdbCloudExadataInfrastructure#customer_contacts_to_send_to_oci}

---

##### `database_server_type`<sup>Optional</sup> <a name="database_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.databaseServerType"></a>

- *Type:* str

The database server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#database_server_type OdbCloudExadataInfrastructure#database_server_type}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.maintenanceWindow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window OdbCloudExadataInfrastructure#maintenance_window}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#region OdbCloudExadataInfrastructure#region}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageCount"></a>

- *Type:* typing.Union[int, float]

TThe number of storage servers that are activated for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#storage_count OdbCloudExadataInfrastructure#storage_count}

---

##### `storage_server_type`<sup>Optional</sup> <a name="storage_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageServerType"></a>

- *Type:* str

The storage server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type OdbCloudExadataInfrastructure#storage_server_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#timeouts OdbCloudExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci">put_customer_contacts_to_send_to_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci">reset_customer_contacts_to_send_to_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType">reset_database_server_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount">reset_storage_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType">reset_storage_server_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_contacts_to_send_to_oci` <a name="put_customer_contacts_to_send_to_oci" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci"></a>

```python
def put_customer_contacts_to_send_to_oci(
  value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureCustomerContactsToSendToOci]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#create OdbCloudExadataInfrastructure#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#delete OdbCloudExadataInfrastructure#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#update OdbCloudExadataInfrastructure#update}

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_compute_count` <a name="reset_compute_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_customer_contacts_to_send_to_oci` <a name="reset_customer_contacts_to_send_to_oci" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci"></a>

```python
def reset_customer_contacts_to_send_to_oci() -> None
```

##### `reset_database_server_type` <a name="reset_database_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType"></a>

```python
def reset_database_server_type() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_count` <a name="reset_storage_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount"></a>

```python
def reset_storage_count() -> None
```

##### `reset_storage_server_type` <a name="reset_storage_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType"></a>

```python
def reset_storage_server_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OdbCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OdbCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbCloudExadataInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OdbCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGbs">available_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGbs">db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion">db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList">OdbCloudExadataInfrastructureMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTbs">max_data_storage_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGbs">max_db_node_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGbs">max_memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGbs">memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.monthlyDbServerVersion">monthly_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.monthlyStorageServerVersion">monthly_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.percentProgress">percent_progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion">storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference">OdbCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGbs">total_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput">customer_contacts_to_send_to_oci_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput">database_server_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput">storage_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput">storage_server_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType">database_server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType">storage_server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `available_storage_size_in_gbs`<sup>Required</sup> <a name="available_storage_size_in_gbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGbs"></a>

```python
available_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customer_contacts_to_send_to_oci`<sup>Required</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci"></a>

```python
customer_contacts_to_send_to_oci: OdbCloudExadataInfrastructureCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a>

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_gbs`<sup>Required</sup> <a name="db_node_storage_size_in_gbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGbs"></a>

```python
db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_version`<sup>Required</sup> <a name="db_server_version" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion"></a>

```python
db_server_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow"></a>

```python
maintenance_window: OdbCloudExadataInfrastructureMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList">OdbCloudExadataInfrastructureMaintenanceWindowList</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_in_tbs`<sup>Required</sup> <a name="max_data_storage_in_tbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTbs"></a>

```python
max_data_storage_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_size_in_gbs`<sup>Required</sup> <a name="max_db_node_storage_size_in_gbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGbs"></a>

```python
max_db_node_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_gbs`<sup>Required</sup> <a name="max_memory_in_gbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGbs"></a>

```python
max_memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_gbs`<sup>Required</sup> <a name="memory_size_in_gbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGbs"></a>

```python
memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_db_server_version`<sup>Required</sup> <a name="monthly_db_server_version" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.monthlyDbServerVersion"></a>

```python
monthly_db_server_version: str
```

- *Type:* str

---

##### `monthly_storage_server_version`<sup>Required</sup> <a name="monthly_storage_server_version" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.monthlyStorageServerVersion"></a>

```python
monthly_storage_server_version: str
```

- *Type:* str

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.percentProgress"></a>

```python
percent_progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `storage_server_version`<sup>Required</sup> <a name="storage_server_version" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion"></a>

```python
storage_server_version: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.timeouts"></a>

```python
timeouts: OdbCloudExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference">OdbCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `total_storage_size_in_gbs`<sup>Required</sup> <a name="total_storage_size_in_gbs" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGbs"></a>

```python
total_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts_to_send_to_oci_input`<sup>Optional</sup> <a name="customer_contacts_to_send_to_oci_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput"></a>

```python
customer_contacts_to_send_to_oci_input: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureCustomerContactsToSendToOci]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]

---

##### `database_server_type_input`<sup>Optional</sup> <a name="database_server_type_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput"></a>

```python
database_server_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `storage_count_input`<sup>Optional</sup> <a name="storage_count_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput"></a>

```python
storage_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_server_type_input`<sup>Optional</sup> <a name="storage_server_type_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput"></a>

```python
storage_server_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OdbCloudExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a>]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_server_type`<sup>Required</sup> <a name="database_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType"></a>

```python
database_server_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_server_type`<sup>Required</sup> <a name="storage_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType"></a>

```python
storage_server_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudExadataInfrastructureConfig <a name="OdbCloudExadataInfrastructureConfig" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zone_id: str,
  display_name: str,
  shape: str,
  availability_zone: str = None,
  compute_count: typing.Union[int, float] = None,
  customer_contacts_to_send_to_oci: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureCustomerContactsToSendToOci]] = None,
  database_server_type: str = None,
  maintenance_window: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindow]] = None,
  region: str = None,
  storage_count: typing.Union[int, float] = None,
  storage_server_type: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: OdbCloudExadataInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the AZ where the Exadata infrastructure is located. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly name for the Exadata infrastructure. Changing this will force terraform to create a new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape">shape</a></code> | <code>str</code> | The model name of the Exadata infrastructure. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The name of the Availability Zone (AZ) where the Exadata infrastructure is located. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | The number of compute instances that the Exadata infrastructure is located. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci">customer_contacts_to_send_to_oci</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]</code> | The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType">database_server_type</a></code> | <code>str</code> | The database server model type of the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | TThe number of storage servers that are activated for the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType">storage_server_type</a></code> | <code>str</code> | The storage server model type of the Exadata infrastructure. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

The AZ ID of the AZ where the Exadata infrastructure is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id OdbCloudExadataInfrastructure#availability_zone_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly name for the Exadata infrastructure. Changing this will force terraform to create a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#display_name OdbCloudExadataInfrastructure#display_name}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

The model name of the Exadata infrastructure. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#shape OdbCloudExadataInfrastructure#shape}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The name of the Availability Zone (AZ) where the Exadata infrastructure is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone OdbCloudExadataInfrastructure#availability_zone}

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of compute instances that the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#compute_count OdbCloudExadataInfrastructure#compute_count}

---

##### `customer_contacts_to_send_to_oci`<sup>Optional</sup> <a name="customer_contacts_to_send_to_oci" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci"></a>

```python
customer_contacts_to_send_to_oci: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureCustomerContactsToSendToOci]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]

The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci OdbCloudExadataInfrastructure#customer_contacts_to_send_to_oci}

---

##### `database_server_type`<sup>Optional</sup> <a name="database_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType"></a>

```python
database_server_type: str
```

- *Type:* str

The database server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#database_server_type OdbCloudExadataInfrastructure#database_server_type}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow"></a>

```python
maintenance_window: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window OdbCloudExadataInfrastructure#maintenance_window}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#region OdbCloudExadataInfrastructure#region}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TThe number of storage servers that are activated for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#storage_count OdbCloudExadataInfrastructure#storage_count}

---

##### `storage_server_type`<sup>Optional</sup> <a name="storage_server_type" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType"></a>

```python
storage_server_type: str
```

- *Type:* str

The storage server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type OdbCloudExadataInfrastructure#storage_server_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.timeouts"></a>

```python
timeouts: OdbCloudExadataInfrastructureTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#timeouts OdbCloudExadataInfrastructure#timeouts}

---

### OdbCloudExadataInfrastructureCustomerContactsToSendToOci <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOci" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci(
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#email OdbCloudExadataInfrastructure#email}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#email OdbCloudExadataInfrastructure#email}.

---

### OdbCloudExadataInfrastructureMaintenanceWindow <a name="OdbCloudExadataInfrastructureMaintenanceWindow" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow(
  custom_action_timeout_in_mins: typing.Union[int, float],
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable],
  patching_mode: str,
  preference: str,
  days_of_week: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek]] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  lead_time_in_weeks: typing.Union[int, float] = None,
  months: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowMonths]] = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#custom_action_timeout_in_mins OdbCloudExadataInfrastructure#custom_action_timeout_in_mins}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OdbCloudExadataInfrastructure#is_custom_action_timeout_enabled}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode">patching_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#patching_mode OdbCloudExadataInfrastructure#patching_mode}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#preference OdbCloudExadataInfrastructure#preference}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek">days_of_week</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#days_of_week OdbCloudExadataInfrastructure#days_of_week}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#hours_of_day OdbCloudExadataInfrastructure#hours_of_day}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#lead_time_in_weeks OdbCloudExadataInfrastructure#lead_time_in_weeks}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#months OdbCloudExadataInfrastructure#months}. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#weeks_of_month OdbCloudExadataInfrastructure#weeks_of_month}. |

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#custom_action_timeout_in_mins OdbCloudExadataInfrastructure#custom_action_timeout_in_mins}.

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OdbCloudExadataInfrastructure#is_custom_action_timeout_enabled}.

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#patching_mode OdbCloudExadataInfrastructure#patching_mode}.

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference"></a>

```python
preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#preference OdbCloudExadataInfrastructure#preference}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```python
days_of_week: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#days_of_week OdbCloudExadataInfrastructure#days_of_week}.

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#hours_of_day OdbCloudExadataInfrastructure#hours_of_day}.

---

##### `lead_time_in_weeks`<sup>Optional</sup> <a name="lead_time_in_weeks" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#lead_time_in_weeks OdbCloudExadataInfrastructure#lead_time_in_weeks}.

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months"></a>

```python
months: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#months OdbCloudExadataInfrastructure#months}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#weeks_of_month OdbCloudExadataInfrastructure#weeks_of_month}.

---

### OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek <a name="OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#name OdbCloudExadataInfrastructure#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#name OdbCloudExadataInfrastructure#name}.

---

### OdbCloudExadataInfrastructureMaintenanceWindowMonths <a name="OdbCloudExadataInfrastructureMaintenanceWindowMonths" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#name OdbCloudExadataInfrastructure#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#name OdbCloudExadataInfrastructure#name}.

---

### OdbCloudExadataInfrastructureTimeouts <a name="OdbCloudExadataInfrastructureTimeouts" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#create OdbCloudExadataInfrastructure#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#delete OdbCloudExadataInfrastructure#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_cloud_exadata_infrastructure#update OdbCloudExadataInfrastructure#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudExadataInfrastructureCustomerContactsToSendToOciList <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciList" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureCustomerContactsToSendToOci]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]]

---


### OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OdbCloudExadataInfrastructureCustomerContactsToSendToOci]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>]

---


### OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList <a name="OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

---


### OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference <a name="OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]

---


### OdbCloudExadataInfrastructureMaintenanceWindowList <a name="OdbCloudExadataInfrastructureMaintenanceWindowList" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudExadataInfrastructureMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]]

---


### OdbCloudExadataInfrastructureMaintenanceWindowMonthsList <a name="OdbCloudExadataInfrastructureMaintenanceWindowMonthsList" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]

---


### OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference <a name="OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OdbCloudExadataInfrastructureMaintenanceWindowMonths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]

---


### OdbCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="OdbCloudExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek">put_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.putMonths">put_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">reset_lead_time_in_weeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_days_of_week` <a name="put_days_of_week" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek"></a>

```python
def put_days_of_week(
  value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

---

##### `put_months` <a name="put_months" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.putMonths"></a>

```python
def put_months(
  value: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowMonths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.putMonths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]

---

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_lead_time_in_weeks` <a name="reset_lead_time_in_weeks" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```python
def reset_lead_time_in_weeks() -> None
```

##### `reset_months` <a name="reset_months" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList">OdbCloudExadataInfrastructureMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">custom_action_timeout_in_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">is_custom_action_timeout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">lead_time_in_weeks_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">months_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList</a>

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```python
months: OdbCloudExadataInfrastructureMaintenanceWindowMonthsList
```

- *Type:* <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonthsList">OdbCloudExadataInfrastructureMaintenanceWindowMonthsList</a>

---

##### `custom_action_timeout_in_mins_input`<sup>Optional</sup> <a name="custom_action_timeout_in_mins_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```python
custom_action_timeout_in_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek">OdbCloudExadataInfrastructureMaintenanceWindowDaysOfWeek</a>]]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled_input`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```python
is_custom_action_timeout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks_input`<sup>Optional</sup> <a name="lead_time_in_weeks_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```python
lead_time_in_weeks_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```python
months_input: typing.Union[IResolvable, typing.List[OdbCloudExadataInfrastructureMaintenanceWindowMonths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowMonths">OdbCloudExadataInfrastructureMaintenanceWindowMonths</a>]]

---

##### `patching_mode_input`<sup>Optional</sup> <a name="patching_mode_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```python
patching_mode_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OdbCloudExadataInfrastructureMaintenanceWindow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>]

---


### OdbCloudExadataInfrastructureTimeoutsOutputReference <a name="OdbCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import odb_cloud_exadata_infrastructure

odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OdbCloudExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTimeouts">OdbCloudExadataInfrastructureTimeouts</a>]

---



