# `worklinkFleet` Submodule <a name="`worklinkFleet` Submodule" id="@cdktf/provider-aws.worklinkFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkFleet <a name="WorklinkFleet" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet aws_worklink_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleet;

WorklinkFleet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .auditStreamArn(java.lang.String)
//  .deviceCaCertificate(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .identityProvider(WorklinkFleetIdentityProvider)
//  .network(WorklinkFleetNetwork)
//  .optimizeForEndUserLocation(java.lang.Boolean)
//  .optimizeForEndUserLocation(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.auditStreamArn">auditStreamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.deviceCaCertificate">deviceCaCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.identityProvider">identityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.optimizeForEndUserLocation">optimizeForEndUserLocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}.

---

##### `auditStreamArn`<sup>Optional</sup> <a name="auditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.auditStreamArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `deviceCaCertificate`<sup>Optional</sup> <a name="deviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.deviceCaCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.identityProvider"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}

---

##### `optimizeForEndUserLocation`<sup>Optional</sup> <a name="optimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.Initializer.parameter.optimizeForEndUserLocation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider">putIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn">resetAuditStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate">resetDeviceCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider">resetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation">resetOptimizeForEndUserLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIdentityProvider` <a name="putIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider"></a>

```java
public void putIdentityProvider(WorklinkFleetIdentityProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putIdentityProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork"></a>

```java
public void putNetwork(WorklinkFleetNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `resetAuditStreamArn` <a name="resetAuditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetAuditStreamArn"></a>

```java
public void resetAuditStreamArn()
```

##### `resetDeviceCaCertificate` <a name="resetDeviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDeviceCaCertificate"></a>

```java
public void resetDeviceCaCertificate()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProvider` <a name="resetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetIdentityProvider"></a>

```java
public void resetIdentityProvider()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetOptimizeForEndUserLocation` <a name="resetOptimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.resetOptimizeForEndUserLocation"></a>

```java
public void resetOptimizeForEndUserLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleet;

WorklinkFleet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleet;

WorklinkFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleet;

WorklinkFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode">companyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider">identityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput">auditStreamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput">deviceCaCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput">identityProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput">optimizeForEndUserLocationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn">auditStreamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate">deviceCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation">optimizeForEndUserLocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `companyCode`<sup>Required</sup> <a name="companyCode" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.companyCode"></a>

```java
public java.lang.String getCompanyCode();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProvider"></a>

```java
public WorklinkFleetIdentityProviderOutputReference getIdentityProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference">WorklinkFleetIdentityProviderOutputReference</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.network"></a>

```java
public WorklinkFleetNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference">WorklinkFleetNetworkOutputReference</a>

---

##### `auditStreamArnInput`<sup>Optional</sup> <a name="auditStreamArnInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArnInput"></a>

```java
public java.lang.String getAuditStreamArnInput();
```

- *Type:* java.lang.String

---

##### `deviceCaCertificateInput`<sup>Optional</sup> <a name="deviceCaCertificateInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificateInput"></a>

```java
public java.lang.String getDeviceCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `identityProviderInput`<sup>Optional</sup> <a name="identityProviderInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.identityProviderInput"></a>

```java
public WorklinkFleetIdentityProvider getIdentityProviderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.networkInput"></a>

```java
public WorklinkFleetNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---

##### `optimizeForEndUserLocationInput`<sup>Optional</sup> <a name="optimizeForEndUserLocationInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocationInput"></a>

```java
public java.lang.Object getOptimizeForEndUserLocationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `auditStreamArn`<sup>Required</sup> <a name="auditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.auditStreamArn"></a>

```java
public java.lang.String getAuditStreamArn();
```

- *Type:* java.lang.String

---

##### `deviceCaCertificate`<sup>Required</sup> <a name="deviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.deviceCaCertificate"></a>

```java
public java.lang.String getDeviceCaCertificate();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `optimizeForEndUserLocation`<sup>Required</sup> <a name="optimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.optimizeForEndUserLocation"></a>

```java
public java.lang.Object getOptimizeForEndUserLocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkFleetConfig <a name="WorklinkFleetConfig" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleetConfig;

WorklinkFleetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .auditStreamArn(java.lang.String)
//  .deviceCaCertificate(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .identityProvider(WorklinkFleetIdentityProvider)
//  .network(WorklinkFleetNetwork)
//  .optimizeForEndUserLocation(java.lang.Boolean)
//  .optimizeForEndUserLocation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn">auditStreamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate">deviceCaCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider">identityProvider</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | identity_provider block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation">optimizeForEndUserLocation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}.

---

##### `auditStreamArn`<sup>Optional</sup> <a name="auditStreamArn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.auditStreamArn"></a>

```java
public java.lang.String getAuditStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}.

---

##### `deviceCaCertificate`<sup>Optional</sup> <a name="deviceCaCertificate" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.deviceCaCertificate"></a>

```java
public java.lang.String getDeviceCaCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProvider`<sup>Optional</sup> <a name="identityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.identityProvider"></a>

```java
public WorklinkFleetIdentityProvider getIdentityProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

identity_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.network"></a>

```java
public WorklinkFleetNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

network block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}

---

##### `optimizeForEndUserLocation`<sup>Optional</sup> <a name="optimizeForEndUserLocation" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetConfig.property.optimizeForEndUserLocation"></a>

```java
public java.lang.Object getOptimizeForEndUserLocation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.

---

### WorklinkFleetIdentityProvider <a name="WorklinkFleetIdentityProvider" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleetIdentityProvider;

WorklinkFleetIdentityProvider.builder()
    .samlMetadata(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata">samlMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}. |

---

##### `samlMetadata`<sup>Required</sup> <a name="samlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.samlMetadata"></a>

```java
public java.lang.String getSamlMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}.

---

### WorklinkFleetNetwork <a name="WorklinkFleetNetwork" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleetNetwork;

WorklinkFleetNetwork.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorklinkFleetIdentityProviderOutputReference <a name="WorklinkFleetIdentityProviderOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleetIdentityProviderOutputReference;

new WorklinkFleetIdentityProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput">samlMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata">samlMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samlMetadataInput`<sup>Optional</sup> <a name="samlMetadataInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadataInput"></a>

```java
public java.lang.String getSamlMetadataInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `samlMetadata`<sup>Required</sup> <a name="samlMetadata" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.samlMetadata"></a>

```java
public java.lang.String getSamlMetadata();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProviderOutputReference.property.internalValue"></a>

```java
public WorklinkFleetIdentityProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetIdentityProvider">WorklinkFleetIdentityProvider</a>

---


### WorklinkFleetNetworkOutputReference <a name="WorklinkFleetNetworkOutputReference" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.worklink_fleet.WorklinkFleetNetworkOutputReference;

new WorklinkFleetNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetworkOutputReference.property.internalValue"></a>

```java
public WorklinkFleetNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.worklinkFleet.WorklinkFleetNetwork">WorklinkFleetNetwork</a>

---



