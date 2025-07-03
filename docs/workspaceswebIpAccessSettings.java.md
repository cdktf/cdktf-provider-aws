# `workspaceswebIpAccessSettings` Submodule <a name="`workspaceswebIpAccessSettings` Submodule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebIpAccessSettings <a name="WorkspaceswebIpAccessSettings" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings aws_workspacesweb_ip_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .customerManagedKey(java.lang.String)
//  .description(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<WorkspaceswebIpAccessSettingsIpRule>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>></code> | ip_rule block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.ipRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>>

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_rule WorkspaceswebIpAccessSettings#ip_rule}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#region WorkspaceswebIpAccessSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext">resetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetIpRule">resetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule"></a>

```java
public void putIpRule(IResolvable OR java.util.List<WorkspaceswebIpAccessSettingsIpRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.putIpRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>>

---

##### `resetAdditionalEncryptionContext` <a name="resetAdditionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetAdditionalEncryptionContext"></a>

```java
public void resetAdditionalEncryptionContext()
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetIpRule"></a>

```java
public void resetIpRule()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettings;

WorkspaceswebIpAccessSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceswebIpAccessSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceswebIpAccessSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceswebIpAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebIpAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns">associatedPortalArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn">ipAccessSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList">WorkspaceswebIpAccessSettingsIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput">additionalEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRuleInput">ipRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedPortalArns`<sup>Required</sup> <a name="associatedPortalArns" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.associatedPortalArns"></a>

```java
public java.util.List<java.lang.String> getAssociatedPortalArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAccessSettingsArn`<sup>Required</sup> <a name="ipAccessSettingsArn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipAccessSettingsArn"></a>

```java
public java.lang.String getIpAccessSettingsArn();
```

- *Type:* java.lang.String

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRule"></a>

```java
public WorkspaceswebIpAccessSettingsIpRuleList getIpRule();
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList">WorkspaceswebIpAccessSettingsIpRuleList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `additionalEncryptionContextInput`<sup>Optional</sup> <a name="additionalEncryptionContextInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKeyInput"></a>

```java
public java.lang.String getCustomerManagedKeyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.ipRuleInput"></a>

```java
public java.lang.Object getIpRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `additionalEncryptionContext`<sup>Required</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebIpAccessSettingsConfig <a name="WorkspaceswebIpAccessSettingsConfig" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsConfig;

WorkspaceswebIpAccessSettingsConfig.builder()
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
    .displayName(java.lang.String)
//  .additionalEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .customerManagedKey(java.lang.String)
//  .description(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<WorkspaceswebIpAccessSettingsIpRule>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext">additionalEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey">customerManagedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>></code> | ip_rule block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}.

---

##### `additionalEncryptionContext`<sup>Optional</sup> <a name="additionalEncryptionContext" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.additionalEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.customerManagedKey"></a>

```java
public java.lang.String getCustomerManagedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.ipRule"></a>

```java
public java.lang.Object getIpRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>>

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_rule WorkspaceswebIpAccessSettings#ip_rule}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#region WorkspaceswebIpAccessSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}.

---

### WorkspaceswebIpAccessSettingsIpRule <a name="WorkspaceswebIpAccessSettingsIpRule" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsIpRule;

WorkspaceswebIpAccessSettingsIpRule.builder()
    .ipRange(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}. |

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebIpAccessSettingsIpRuleList <a name="WorkspaceswebIpAccessSettingsIpRuleList" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsIpRuleList;

new WorkspaceswebIpAccessSettingsIpRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get"></a>

```java
public WorkspaceswebIpAccessSettingsIpRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>>

---


### WorkspaceswebIpAccessSettingsIpRuleOutputReference <a name="WorkspaceswebIpAccessSettingsIpRuleOutputReference" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_ip_access_settings.WorkspaceswebIpAccessSettingsIpRuleOutputReference;

new WorkspaceswebIpAccessSettingsIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.workspaceswebIpAccessSettings.WorkspaceswebIpAccessSettingsIpRule">WorkspaceswebIpAccessSettingsIpRule</a>

---



