# `cloudtrailEventDataStore` Submodule <a name="`cloudtrailEventDataStore` Submodule" id="@cdktf/provider-aws.cloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailEventDataStore <a name="CloudtrailEventDataStore" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store aws_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStore;

CloudtrailEventDataStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .advancedEventSelector(IResolvable)
//  .advancedEventSelector(java.util.List<CloudtrailEventDataStoreAdvancedEventSelector>)
//  .billingMode(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .multiRegionEnabled(java.lang.Boolean)
//  .multiRegionEnabled(IResolvable)
//  .organizationEnabled(java.lang.Boolean)
//  .organizationEnabled(IResolvable)
//  .region(java.lang.String)
//  .retentionPeriod(java.lang.Number)
//  .suspend(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationProtectionEnabled(java.lang.Boolean)
//  .terminationProtectionEnabled(IResolvable)
//  .timeouts(CloudtrailEventDataStoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.advancedEventSelector">advancedEventSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>></code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.billingMode">billingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.multiRegionEnabled">multiRegionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.organizationEnabled">organizationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.suspend">suspend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#suspend CloudtrailEventDataStore#suspend}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

##### `advancedEventSelector`<sup>Optional</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.advancedEventSelector"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>>

advanced_event_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.billingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}.

---

##### `multiRegionEnabled`<sup>Optional</sup> <a name="multiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.multiRegionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}.

---

##### `organizationEnabled`<sup>Optional</sup> <a name="organizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.organizationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#region CloudtrailEventDataStore#region}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.retentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.suspend"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#suspend CloudtrailEventDataStore#suspend}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector">putAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector">resetAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetBillingMode">resetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled">resetMultiRegionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled">resetOrganizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled">resetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedEventSelector` <a name="putAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector"></a>

```java
public void putAdvancedEventSelector(IResolvable OR java.util.List<CloudtrailEventDataStoreAdvancedEventSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts"></a>

```java
public void putTimeouts(CloudtrailEventDataStoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

---

##### `resetAdvancedEventSelector` <a name="resetAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector"></a>

```java
public void resetAdvancedEventSelector()
```

##### `resetBillingMode` <a name="resetBillingMode" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetBillingMode"></a>

```java
public void resetBillingMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMultiRegionEnabled` <a name="resetMultiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled"></a>

```java
public void resetMultiRegionEnabled()
```

##### `resetOrganizationEnabled` <a name="resetOrganizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled"></a>

```java
public void resetOrganizationEnabled()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetSuspend"></a>

```java
public void resetSuspend()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTerminationProtectionEnabled` <a name="resetTerminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled"></a>

```java
public void resetTerminationProtectionEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudtrailEventDataStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStore;

CloudtrailEventDataStore.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStore;

CloudtrailEventDataStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStore;

CloudtrailEventDataStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStore;

CloudtrailEventDataStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudtrailEventDataStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudtrailEventDataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudtrailEventDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudtrailEventDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudtrailEventDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector">advancedEventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput">advancedEventSelectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingModeInput">billingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput">multiRegionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput">organizationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.suspendInput">suspendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput">terminationProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled">organizationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.suspend">suspend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advancedEventSelector`<sup>Required</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector"></a>

```java
public CloudtrailEventDataStoreAdvancedEventSelectorList getAdvancedEventSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts"></a>

```java
public CloudtrailEventDataStoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a>

---

##### `advancedEventSelectorInput`<sup>Optional</sup> <a name="advancedEventSelectorInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput"></a>

```java
public java.lang.Object getAdvancedEventSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>>

---

##### `billingModeInput`<sup>Optional</sup> <a name="billingModeInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingModeInput"></a>

```java
public java.lang.String getBillingModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `multiRegionEnabledInput`<sup>Optional</sup> <a name="multiRegionEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput"></a>

```java
public java.lang.Object getMultiRegionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationEnabledInput`<sup>Optional</sup> <a name="organizationEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput"></a>

```java
public java.lang.Object getOrganizationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput"></a>

```java
public java.lang.Number getRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.suspendInput"></a>

```java
public java.lang.String getSuspendInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminationProtectionEnabledInput`<sup>Optional</sup> <a name="terminationProtectionEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput"></a>

```java
public java.lang.Object getTerminationProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `multiRegionEnabled`<sup>Required</sup> <a name="multiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled"></a>

```java
public java.lang.Object getMultiRegionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organizationEnabled`<sup>Required</sup> <a name="organizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled"></a>

```java
public java.lang.Object getOrganizationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.suspend"></a>

```java
public java.lang.String getSuspend();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```java
public java.lang.Object getTerminationProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailEventDataStoreAdvancedEventSelector <a name="CloudtrailEventDataStoreAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreAdvancedEventSelector;

CloudtrailEventDataStoreAdvancedEventSelector.builder()
//  .fieldSelector(IResolvable)
//  .fieldSelector(java.util.List<CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector">fieldSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>></code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |

---

##### `fieldSelector`<sup>Optional</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector"></a>

```java
public java.lang.Object getFieldSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>>

field_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#field_selector CloudtrailEventDataStore#field_selector}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector;

CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.builder()
//  .endsWith(java.util.List<java.lang.String>)
//  .equalTo(java.util.List<java.lang.String>)
//  .field(java.lang.String)
//  .notEndsWith(java.util.List<java.lang.String>)
//  .notEquals(java.util.List<java.lang.String>)
//  .notStartsWith(java.util.List<java.lang.String>)
//  .startsWith(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith">endsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field">field</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith">notEndsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith">notStartsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith">startsWith</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```java
public java.util.List<java.lang.String> getEndsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}.

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}.

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}.

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```java
public java.util.List<java.lang.String> getNotEndsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}.

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}.

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```java
public java.util.List<java.lang.String> getNotStartsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}.

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```java
public java.util.List<java.lang.String> getStartsWith();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}.

---

### CloudtrailEventDataStoreConfig <a name="CloudtrailEventDataStoreConfig" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreConfig;

CloudtrailEventDataStoreConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .advancedEventSelector(IResolvable)
//  .advancedEventSelector(java.util.List<CloudtrailEventDataStoreAdvancedEventSelector>)
//  .billingMode(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .multiRegionEnabled(java.lang.Boolean)
//  .multiRegionEnabled(IResolvable)
//  .organizationEnabled(java.lang.Boolean)
//  .organizationEnabled(IResolvable)
//  .region(java.lang.String)
//  .retentionPeriod(java.lang.Number)
//  .suspend(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationProtectionEnabled(java.lang.Boolean)
//  .terminationProtectionEnabled(IResolvable)
//  .timeouts(CloudtrailEventDataStoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector">advancedEventSelector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>></code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled">organizationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.suspend">suspend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#suspend CloudtrailEventDataStore#suspend}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

##### `advancedEventSelector`<sup>Optional</sup> <a name="advancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector"></a>

```java
public java.lang.Object getAdvancedEventSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>>

advanced_event_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}

---

##### `billingMode`<sup>Optional</sup> <a name="billingMode" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}.

---

##### `multiRegionEnabled`<sup>Optional</sup> <a name="multiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled"></a>

```java
public java.lang.Object getMultiRegionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}.

---

##### `organizationEnabled`<sup>Optional</sup> <a name="organizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled"></a>

```java
public java.lang.Object getOrganizationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#region CloudtrailEventDataStore#region}

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.suspend"></a>

```java
public java.lang.String getSuspend();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#suspend CloudtrailEventDataStore#suspend}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled"></a>

```java
public java.lang.Object getTerminationProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts"></a>

```java
public CloudtrailEventDataStoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}

---

### CloudtrailEventDataStoreTimeouts <a name="CloudtrailEventDataStoreTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreTimeouts;

CloudtrailEventDataStoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList;

new CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get"></a>

```java
public CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>>

---


### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference;

new CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```java
public void resetEndsWith()
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```java
public void resetEqualTo()
```

##### `resetField` <a name="resetField" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField"></a>

```java
public void resetField()
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```java
public void resetNotEndsWith()
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```java
public void resetNotEquals()
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```java
public void resetNotStartsWith()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```java
public void resetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">equalToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">endsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">equalTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">notEquals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">startsWith</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```java
public java.util.List<java.lang.String> getEndsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```java
public java.util.List<java.lang.String> getEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```java
public java.util.List<java.lang.String> getNotEndsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```java
public java.util.List<java.lang.String> getNotEqualsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```java
public java.util.List<java.lang.String> getNotStartsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```java
public java.util.List<java.lang.String> getStartsWithInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```java
public java.util.List<java.lang.String> getEndsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```java
public java.util.List<java.lang.String> getEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```java
public java.util.List<java.lang.String> getNotEndsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```java
public java.util.List<java.lang.String> getNotEquals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```java
public java.util.List<java.lang.String> getNotStartsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```java
public java.util.List<java.lang.String> getStartsWith();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>

---


### CloudtrailEventDataStoreAdvancedEventSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreAdvancedEventSelectorList;

new CloudtrailEventDataStoreAdvancedEventSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get"></a>

```java
public CloudtrailEventDataStoreAdvancedEventSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>>

---


### CloudtrailEventDataStoreAdvancedEventSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference;

new CloudtrailEventDataStoreAdvancedEventSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector">putFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector">resetFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelector` <a name="putFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```java
public void putFieldSelector(IResolvable OR java.util.List<CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>>

---

##### `resetFieldSelector` <a name="resetFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector"></a>

```java
public void resetFieldSelector()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector">fieldSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput">fieldSelectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```java
public CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList getFieldSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a>

---

##### `fieldSelectorInput`<sup>Optional</sup> <a name="fieldSelectorInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```java
public java.lang.Object getFieldSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector">CloudtrailEventDataStoreAdvancedEventSelector</a>

---


### CloudtrailEventDataStoreTimeoutsOutputReference <a name="CloudtrailEventDataStoreTimeoutsOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudtrail_event_data_store.CloudtrailEventDataStoreTimeoutsOutputReference;

new CloudtrailEventDataStoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

---



