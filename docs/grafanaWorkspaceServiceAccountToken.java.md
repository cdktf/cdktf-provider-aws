# `grafanaWorkspaceServiceAccountToken` Submodule <a name="`grafanaWorkspaceServiceAccountToken` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceServiceAccountToken <a name="GrafanaWorkspaceServiceAccountToken" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.Builder.create(Construct scope, java.lang.String id)
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
    .secondsToLive(java.lang.Number)
    .serviceAccountId(java.lang.String)
    .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.secondsToLive">secondsToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}.

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.secondsToLive"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}.

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.serviceAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrafanaWorkspaceServiceAccountToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrafanaWorkspaceServiceAccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrafanaWorkspaceServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspaceServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId">serviceAccountTokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput">secondsToLiveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive">secondsToLive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `serviceAccountTokenId`<sup>Required</sup> <a name="serviceAccountTokenId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId"></a>

```java
public java.lang.String getServiceAccountTokenId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secondsToLiveInput`<sup>Optional</sup> <a name="secondsToLiveInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput"></a>

```java
public java.lang.Number getSecondsToLiveInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput"></a>

```java
public java.lang.String getServiceAccountIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive"></a>

```java
public java.lang.Number getSecondsToLive();
```

- *Type:* java.lang.Number

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceServiceAccountTokenConfig <a name="GrafanaWorkspaceServiceAccountTokenConfig" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountTokenConfig;

GrafanaWorkspaceServiceAccountTokenConfig.builder()
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
    .secondsToLive(java.lang.Number)
    .serviceAccountId(java.lang.String)
    .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive">secondsToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}.

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive"></a>

```java
public java.lang.Number getSecondsToLive();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}.

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}.

---



