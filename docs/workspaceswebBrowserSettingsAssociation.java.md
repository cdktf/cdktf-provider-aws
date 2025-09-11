# `workspaceswebBrowserSettingsAssociation` Submodule <a name="`workspaceswebBrowserSettingsAssociation` Submodule" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebBrowserSettingsAssociation <a name="WorkspaceswebBrowserSettingsAssociation" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association aws_workspacesweb_browser_settings_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_browser_settings_association.WorkspaceswebBrowserSettingsAssociation;

WorkspaceswebBrowserSettingsAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .browserSettingsArn(java.lang.String)
    .portalArn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.browserSettingsArn">browserSettingsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#browser_settings_arn WorkspaceswebBrowserSettingsAssociation#browser_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.portalArn">portalArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#portal_arn WorkspaceswebBrowserSettingsAssociation#portal_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.browserSettingsArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#browser_settings_arn WorkspaceswebBrowserSettingsAssociation#browser_settings_arn}.

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.portalArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#portal_arn WorkspaceswebBrowserSettingsAssociation#portal_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#region WorkspaceswebBrowserSettingsAssociation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceswebBrowserSettingsAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_browser_settings_association.WorkspaceswebBrowserSettingsAssociation;

WorkspaceswebBrowserSettingsAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_browser_settings_association.WorkspaceswebBrowserSettingsAssociation;

WorkspaceswebBrowserSettingsAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_browser_settings_association.WorkspaceswebBrowserSettingsAssociation;

WorkspaceswebBrowserSettingsAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_browser_settings_association.WorkspaceswebBrowserSettingsAssociation;

WorkspaceswebBrowserSettingsAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkspaceswebBrowserSettingsAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkspaceswebBrowserSettingsAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkspaceswebBrowserSettingsAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkspaceswebBrowserSettingsAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebBrowserSettingsAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.browserSettingsArnInput">browserSettingsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.portalArnInput">portalArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.browserSettingsArn">browserSettingsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `browserSettingsArnInput`<sup>Optional</sup> <a name="browserSettingsArnInput" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.browserSettingsArnInput"></a>

```java
public java.lang.String getBrowserSettingsArnInput();
```

- *Type:* java.lang.String

---

##### `portalArnInput`<sup>Optional</sup> <a name="portalArnInput" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.portalArnInput"></a>

```java
public java.lang.String getPortalArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.browserSettingsArn"></a>

```java
public java.lang.String getBrowserSettingsArn();
```

- *Type:* java.lang.String

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebBrowserSettingsAssociationConfig <a name="WorkspaceswebBrowserSettingsAssociationConfig" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.workspacesweb_browser_settings_association.WorkspaceswebBrowserSettingsAssociationConfig;

WorkspaceswebBrowserSettingsAssociationConfig.builder()
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
    .browserSettingsArn(java.lang.String)
    .portalArn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.browserSettingsArn">browserSettingsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#browser_settings_arn WorkspaceswebBrowserSettingsAssociation#browser_settings_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#portal_arn WorkspaceswebBrowserSettingsAssociation#portal_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `browserSettingsArn`<sup>Required</sup> <a name="browserSettingsArn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.browserSettingsArn"></a>

```java
public java.lang.String getBrowserSettingsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#browser_settings_arn WorkspaceswebBrowserSettingsAssociation#browser_settings_arn}.

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#portal_arn WorkspaceswebBrowserSettingsAssociation#portal_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebBrowserSettingsAssociation.WorkspaceswebBrowserSettingsAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/workspacesweb_browser_settings_association#region WorkspaceswebBrowserSettingsAssociation#region}

---



