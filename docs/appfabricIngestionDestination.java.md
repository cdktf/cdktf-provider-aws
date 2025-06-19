# `appfabricIngestionDestination` Submodule <a name="`appfabricIngestionDestination` Submodule" id="@cdktf/provider-aws.appfabricIngestionDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricIngestionDestination <a name="AppfabricIngestionDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination aws_appfabric_ingestion_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.Builder.create(Construct scope, java.lang.String id)
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
    .appBundleArn(java.lang.String)
    .ingestionArn(java.lang.String)
//  .destinationConfiguration(IResolvable)
//  .destinationConfiguration(java.util.List<AppfabricIngestionDestinationDestinationConfiguration>)
//  .processingConfiguration(IResolvable)
//  .processingConfiguration(java.util.List<AppfabricIngestionDestinationProcessingConfiguration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppfabricIngestionDestinationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.ingestionArn">ingestionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.destinationConfiguration">destinationConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.processingConfiguration">processingConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>></code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.appBundleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}.

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.ingestionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}.

---

##### `destinationConfiguration`<sup>Optional</sup> <a name="destinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.destinationConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>>

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `processingConfiguration`<sup>Optional</sup> <a name="processingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.processingConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>>

processing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#region AppfabricIngestionDestination#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration">putDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration">putProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetDestinationConfiguration">resetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetProcessingConfiguration">resetProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfiguration` <a name="putDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration"></a>

```java
public void putDestinationConfiguration(IResolvable OR java.util.List<AppfabricIngestionDestinationDestinationConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putDestinationConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>>

---

##### `putProcessingConfiguration` <a name="putProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration"></a>

```java
public void putProcessingConfiguration(IResolvable OR java.util.List<AppfabricIngestionDestinationProcessingConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putProcessingConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts"></a>

```java
public void putTimeouts(AppfabricIngestionDestinationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

---

##### `resetDestinationConfiguration` <a name="resetDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetDestinationConfiguration"></a>

```java
public void resetDestinationConfiguration()
```

##### `resetProcessingConfiguration` <a name="resetProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetProcessingConfiguration"></a>

```java
public void resetProcessingConfiguration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestination;

AppfabricIngestionDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppfabricIngestionDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppfabricIngestionDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppfabricIngestionDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppfabricIngestionDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricIngestionDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList">AppfabricIngestionDestinationDestinationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration">processingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList">AppfabricIngestionDestinationProcessingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference">AppfabricIngestionDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput">appBundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput">destinationConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput">ingestionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput">processingConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn">ingestionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfiguration"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationList getDestinationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList">AppfabricIngestionDestinationDestinationConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `processingConfiguration`<sup>Required</sup> <a name="processingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfiguration"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationList getProcessingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList">AppfabricIngestionDestinationProcessingConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeouts"></a>

```java
public AppfabricIngestionDestinationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference">AppfabricIngestionDestinationTimeoutsOutputReference</a>

---

##### `appBundleArnInput`<sup>Optional</sup> <a name="appBundleArnInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArnInput"></a>

```java
public java.lang.String getAppBundleArnInput();
```

- *Type:* java.lang.String

---

##### `destinationConfigurationInput`<sup>Optional</sup> <a name="destinationConfigurationInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.destinationConfigurationInput"></a>

```java
public java.lang.Object getDestinationConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>>

---

##### `ingestionArnInput`<sup>Optional</sup> <a name="ingestionArnInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArnInput"></a>

```java
public java.lang.String getIngestionArnInput();
```

- *Type:* java.lang.String

---

##### `processingConfigurationInput`<sup>Optional</sup> <a name="processingConfigurationInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.processingConfigurationInput"></a>

```java
public java.lang.Object getProcessingConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.ingestionArn"></a>

```java
public java.lang.String getIngestionArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricIngestionDestinationConfig <a name="AppfabricIngestionDestinationConfig" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationConfig;

AppfabricIngestionDestinationConfig.builder()
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
    .appBundleArn(java.lang.String)
    .ingestionArn(java.lang.String)
//  .destinationConfiguration(IResolvable)
//  .destinationConfiguration(java.util.List<AppfabricIngestionDestinationDestinationConfiguration>)
//  .processingConfiguration(IResolvable)
//  .processingConfiguration(java.util.List<AppfabricIngestionDestinationProcessingConfiguration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppfabricIngestionDestinationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn">appBundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn">ingestionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration">destinationConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>></code> | destination_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration">processingConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>></code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appBundleArn`<sup>Required</sup> <a name="appBundleArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.appBundleArn"></a>

```java
public java.lang.String getAppBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#app_bundle_arn AppfabricIngestionDestination#app_bundle_arn}.

---

##### `ingestionArn`<sup>Required</sup> <a name="ingestionArn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.ingestionArn"></a>

```java
public java.lang.String getIngestionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#ingestion_arn AppfabricIngestionDestination#ingestion_arn}.

---

##### `destinationConfiguration`<sup>Optional</sup> <a name="destinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.destinationConfiguration"></a>

```java
public java.lang.Object getDestinationConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>>

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#destination_configuration AppfabricIngestionDestination#destination_configuration}

---

##### `processingConfiguration`<sup>Optional</sup> <a name="processingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.processingConfiguration"></a>

```java
public java.lang.Object getProcessingConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>>

processing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#processing_configuration AppfabricIngestionDestination#processing_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#region AppfabricIngestionDestination#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#tags AppfabricIngestionDestination#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationConfig.property.timeouts"></a>

```java
public AppfabricIngestionDestinationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#timeouts AppfabricIngestionDestination#timeouts}

---

### AppfabricIngestionDestinationDestinationConfiguration <a name="AppfabricIngestionDestinationDestinationConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfiguration;

AppfabricIngestionDestinationDestinationConfiguration.builder()
//  .auditLog(IResolvable)
//  .auditLog(java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLog>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog">auditLog</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>></code> | audit_log block. |

---

##### `auditLog`<sup>Optional</sup> <a name="auditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration.property.auditLog"></a>

```java
public java.lang.Object getAuditLog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLog <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLog;

AppfabricIngestionDestinationDestinationConfigurationAuditLog.builder()
//  .destination(IResolvable)
//  .destination(java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>></code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog.property.destination"></a>

```java
public java.lang.Object getDestination();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#destination AppfabricIngestionDestination#destination}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination;

AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.builder()
//  .firehoseStream(IResolvable)
//  .firehoseStream(java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream>)
//  .s3Bucket(IResolvable)
//  .s3Bucket(java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream">firehoseStream</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>></code> | firehose_stream block. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket">s3Bucket</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>></code> | s3_bucket block. |

---

##### `firehoseStream`<sup>Optional</sup> <a name="firehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.firehoseStream"></a>

```java
public java.lang.Object getFirehoseStream();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>>

firehose_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#firehose_stream AppfabricIngestionDestination#firehose_stream}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination.property.s3Bucket"></a>

```java
public java.lang.Object getS3Bucket();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>>

s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#s3_bucket AppfabricIngestionDestination#s3_bucket}

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream;

AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.builder()
    .streamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}. |

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#stream_name AppfabricIngestionDestination#stream_name}.

---

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket;

AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.builder()
    .bucketName(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#bucket_name AppfabricIngestionDestination#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#prefix AppfabricIngestionDestination#prefix}.

---

### AppfabricIngestionDestinationProcessingConfiguration <a name="AppfabricIngestionDestinationProcessingConfiguration" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfiguration;

AppfabricIngestionDestinationProcessingConfiguration.builder()
//  .auditLog(IResolvable)
//  .auditLog(java.util.List<AppfabricIngestionDestinationProcessingConfigurationAuditLog>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog">auditLog</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>></code> | audit_log block. |

---

##### `auditLog`<sup>Optional</sup> <a name="auditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration.property.auditLog"></a>

```java
public java.lang.Object getAuditLog();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#audit_log AppfabricIngestionDestination#audit_log}

---

### AppfabricIngestionDestinationProcessingConfigurationAuditLog <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationAuditLog;

AppfabricIngestionDestinationProcessingConfigurationAuditLog.builder()
    .format(java.lang.String)
    .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#format AppfabricIngestionDestination#format}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#schema AppfabricIngestionDestination#schema}.

---

### AppfabricIngestionDestinationTimeouts <a name="AppfabricIngestionDestinationTimeouts" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationTimeouts;

AppfabricIngestionDestinationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#create AppfabricIngestionDestination#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#delete AppfabricIngestionDestination#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_ingestion_destination#update AppfabricIngestionDestination#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream">putFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket">putS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream">resetFirehoseStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirehoseStream` <a name="putFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream"></a>

```java
public void putFirehoseStream(IResolvable OR java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putFirehoseStream.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>>

---

##### `putS3Bucket` <a name="putS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket"></a>

```java
public void putS3Bucket(IResolvable OR java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.putS3Bucket.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>>

---

##### `resetFirehoseStream` <a name="resetFirehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetFirehoseStream"></a>

```java
public void resetFirehoseStream()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream">firehoseStream</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput">firehoseStreamInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firehoseStream`<sup>Required</sup> <a name="firehoseStream" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStream"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList getFirehoseStream();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStreamList</a>

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3Bucket"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList getS3Bucket();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList</a>

---

##### `firehoseStreamInput`<sup>Optional</sup> <a name="firehoseStreamInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.firehoseStreamInput"></a>

```java
public java.lang.Object getFirehoseStreamInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationFirehoseStream</a>>

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.s3BucketInput"></a>

```java
public java.lang.Object getS3BucketInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3BucketOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket</a>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogList <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>>

---


### AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination"></a>

```java
public void putDestination(IResolvable OR java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.putDestination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.resetDestination"></a>

```java
public void resetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput">destinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destination"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestinationList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.destinationInput"></a>

```java
public java.lang.Object getDestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination">AppfabricIngestionDestinationDestinationConfigurationAuditLogDestination</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>

---


### AppfabricIngestionDestinationDestinationConfigurationList <a name="AppfabricIngestionDestinationDestinationConfigurationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationList;

new AppfabricIngestionDestinationDestinationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>>

---


### AppfabricIngestionDestinationDestinationConfigurationOutputReference <a name="AppfabricIngestionDestinationDestinationConfigurationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationDestinationConfigurationOutputReference;

new AppfabricIngestionDestinationDestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog">putAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resetAuditLog">resetAuditLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLog` <a name="putAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog"></a>

```java
public void putAuditLog(IResolvable OR java.util.List<AppfabricIngestionDestinationDestinationConfigurationAuditLog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>>

---

##### `resetAuditLog` <a name="resetAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.resetAuditLog"></a>

```java
public void resetAuditLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog">auditLog</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList">AppfabricIngestionDestinationDestinationConfigurationAuditLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput">auditLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLog"></a>

```java
public AppfabricIngestionDestinationDestinationConfigurationAuditLogList getAuditLog();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLogList">AppfabricIngestionDestinationDestinationConfigurationAuditLogList</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.auditLogInput"></a>

```java
public java.lang.Object getAuditLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationAuditLog">AppfabricIngestionDestinationDestinationConfigurationAuditLog</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationDestinationConfiguration">AppfabricIngestionDestinationDestinationConfiguration</a>

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogList <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList;

new AppfabricIngestionDestinationProcessingConfigurationAuditLogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>>

---


### AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference;

new AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>

---


### AppfabricIngestionDestinationProcessingConfigurationList <a name="AppfabricIngestionDestinationProcessingConfigurationList" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationList;

new AppfabricIngestionDestinationProcessingConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>>

---


### AppfabricIngestionDestinationProcessingConfigurationOutputReference <a name="AppfabricIngestionDestinationProcessingConfigurationOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationProcessingConfigurationOutputReference;

new AppfabricIngestionDestinationProcessingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog">putAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resetAuditLog">resetAuditLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLog` <a name="putAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog"></a>

```java
public void putAuditLog(IResolvable OR java.util.List<AppfabricIngestionDestinationProcessingConfigurationAuditLog> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.putAuditLog.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>>

---

##### `resetAuditLog` <a name="resetAuditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.resetAuditLog"></a>

```java
public void resetAuditLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog">auditLog</a></code> | <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList">AppfabricIngestionDestinationProcessingConfigurationAuditLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput">auditLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLog`<sup>Required</sup> <a name="auditLog" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLog"></a>

```java
public AppfabricIngestionDestinationProcessingConfigurationAuditLogList getAuditLog();
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLogList">AppfabricIngestionDestinationProcessingConfigurationAuditLogList</a>

---

##### `auditLogInput`<sup>Optional</sup> <a name="auditLogInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.auditLogInput"></a>

```java
public java.lang.Object getAuditLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationAuditLog">AppfabricIngestionDestinationProcessingConfigurationAuditLog</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationProcessingConfiguration">AppfabricIngestionDestinationProcessingConfiguration</a>

---


### AppfabricIngestionDestinationTimeoutsOutputReference <a name="AppfabricIngestionDestinationTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.appfabric_ingestion_destination.AppfabricIngestionDestinationTimeoutsOutputReference;

new AppfabricIngestionDestinationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.appfabricIngestionDestination.AppfabricIngestionDestinationTimeouts">AppfabricIngestionDestinationTimeouts</a>

---



