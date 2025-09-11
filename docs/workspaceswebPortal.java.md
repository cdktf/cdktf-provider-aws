# `workspaceswebPortal` Submodule <a name="`workspaceswebPortal` Submodule" id="@cdktf/provider-aws.workspaceswebPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebPortal <a name="WorkspaceswebPortal" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal aws_workspacesweb_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortal;

WorkspaceswebPortal.Builder.create(Construct scope, java.lang.String id)
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
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticationType(java.lang.String)
//  .browserSettingsArn(java.lang.String)
//  .customerManagedKey(java.lang.String)
//  .displayName(java.lang.String)
//  .instanceType(java.lang.String)
//  .maxConcurrentSessions(java.lang.Number)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkspaceswebPortalTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.browserSettingsArn">browserSettingsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browserSettingsArn`<sup>Optional</sup> <a name="browserSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.browserSettingsArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.customerManagedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `maxConcurrentSessions`<sup>Optional</sup> <a name="maxConcurrentSessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.maxConcurrentSessions"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#region WorkspaceswebPortal#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#timeouts WorkspaceswebPortal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn">resetBrowserSettingsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions">resetMaxConcurrentSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts"></a>

```java
public void putTimeouts(WorkspaceswebPortalTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAdditionalEncryptionContext"></a>

```java
public void resetAdditionalEncryptionContext()
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetBrowserSettingsArn` <a name="resetBrowserSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetBrowserSettingsArn"></a>

```java
public void resetBrowserSettingsArn()
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetMaxConcurrentSessions` <a name="resetMaxConcurrentSessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetMaxConcurrentSessions"></a>

```java
public void resetMaxConcurrentSessions()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebPortal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortal;

WorkspaceswebPortal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortal;

WorkspaceswebPortal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortal;

WorkspaceswebPortal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortal;

WorkspaceswebPortal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceswebPortal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkspaceswebPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceswebPortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceswebPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserType">browserType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn">dataProtectionSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn">ipAccessSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn">networkSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint">portalEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus">portalStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.rendererType">rendererType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn">sessionLoggerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference">WorkspaceswebPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn">trustStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn">userAccessLoggingSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn">userSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput">browserSettingsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput">maxConcurrentSessionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn">browserSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `browserType`<sup>Required</sup> <a name="browserType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserType"></a>

```java
public java.lang.String getBrowserType();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `dataProtectionSettingsArn`<sup>Required</sup> <a name="dataProtectionSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.dataProtectionSettingsArn"></a>

```java
public java.lang.String getDataProtectionSettingsArn();
```

- *Type:* java.lang.String

---

##### `ipAccessSettingsArn`<sup>Required</sup> <a name="ipAccessSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.ipAccessSettingsArn"></a>

```java
public java.lang.String getIpAccessSettingsArn();
```

- *Type:* java.lang.String

---

##### `networkSettingsArn`<sup>Required</sup> <a name="networkSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.networkSettingsArn"></a>

```java
public java.lang.String getNetworkSettingsArn();
```

- *Type:* java.lang.String

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

---

##### `portalEndpoint`<sup>Required</sup> <a name="portalEndpoint" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalEndpoint"></a>

```java
public java.lang.String getPortalEndpoint();
```

- *Type:* java.lang.String

---

##### `portalStatus`<sup>Required</sup> <a name="portalStatus" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.portalStatus"></a>

```java
public java.lang.String getPortalStatus();
```

- *Type:* java.lang.String

---

##### `rendererType`<sup>Required</sup> <a name="rendererType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.rendererType"></a>

```java
public java.lang.String getRendererType();
```

- *Type:* java.lang.String

---

##### `sessionLoggerArn`<sup>Required</sup> <a name="sessionLoggerArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.sessionLoggerArn"></a>

```java
public java.lang.String getSessionLoggerArn();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeouts"></a>

```java
public WorkspaceswebPortalTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference">WorkspaceswebPortalTimeoutsOutputReference</a>

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.trustStoreArn"></a>

```java
public java.lang.String getTrustStoreArn();
```

- *Type:* java.lang.String

---

##### `userAccessLoggingSettingsArn`<sup>Required</sup> <a name="userAccessLoggingSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userAccessLoggingSettingsArn"></a>

```java
public java.lang.String getUserAccessLoggingSettingsArn();
```

- *Type:* java.lang.String

---

##### `userSettingsArn`<sup>Required</sup> <a name="userSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.userSettingsArn"></a>

```java
public java.lang.String getUserSettingsArn();
```

- *Type:* java.lang.String

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `browserSettingsArnInput`<sup>Optional</sup> <a name="browserSettingsArnInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArnInput"></a>

```java
public java.lang.String getBrowserSettingsArnInput();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKeyInput"></a>

```java
public java.lang.String getCustomerManagedKeyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrentSessionsInput`<sup>Optional</sup> <a name="maxConcurrentSessionsInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessionsInput"></a>

```java
public java.lang.Number getMaxConcurrentSessionsInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.browserSettingsArn"></a>

```java
public java.lang.String getBrowserSettingsArn();
```

- *Type:* java.lang.String

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `maxConcurrentSessions`<sup>Required</sup> <a name="maxConcurrentSessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.maxConcurrentSessions"></a>

```java
public java.lang.Number getMaxConcurrentSessions();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebPortalConfig <a name="WorkspaceswebPortalConfig" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortalConfig;

WorkspaceswebPortalConfig.builder()
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
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticationType(java.lang.String)
//  .browserSettingsArn(java.lang.String)
//  .customerManagedKey(java.lang.String)
//  .displayName(java.lang.String)
//  .instanceType(java.lang.String)
//  .maxConcurrentSessions(java.lang.Number)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkspaceswebPortalTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn">browserSettingsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions">maxConcurrentSessions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#additional_encryption_context WorkspaceswebPortal#additional_encryption_context}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#authentication_type WorkspaceswebPortal#authentication_type}.

---

##### `browserSettingsArn`<sup>Optional</sup> <a name="browserSettingsArn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.browserSettingsArn"></a>

```java
public java.lang.String getBrowserSettingsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#browser_settings_arn WorkspaceswebPortal#browser_settings_arn}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#customer_managed_key WorkspaceswebPortal#customer_managed_key}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#display_name WorkspaceswebPortal#display_name}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#instance_type WorkspaceswebPortal#instance_type}.

---

##### `maxConcurrentSessions`<sup>Optional</sup> <a name="maxConcurrentSessions" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.maxConcurrentSessions"></a>

```java
public java.lang.Number getMaxConcurrentSessions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#max_concurrent_sessions WorkspaceswebPortal#max_concurrent_sessions}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#region WorkspaceswebPortal#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#tags WorkspaceswebPortal#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalConfig.property.timeouts"></a>

```java
public WorkspaceswebPortalTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#timeouts WorkspaceswebPortal#timeouts}

---

### WorkspaceswebPortalTimeouts <a name="WorkspaceswebPortalTimeouts" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortalTimeouts;

WorkspaceswebPortalTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#create WorkspaceswebPortal#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#delete WorkspaceswebPortal#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_portal#update WorkspaceswebPortal#update}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebPortalTimeoutsOutputReference <a name="WorkspaceswebPortalTimeoutsOutputReference" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_portal.WorkspaceswebPortalTimeoutsOutputReference;

new WorkspaceswebPortalTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.workspaceswebPortal.WorkspaceswebPortalTimeouts">WorkspaceswebPortalTimeouts</a>

---



