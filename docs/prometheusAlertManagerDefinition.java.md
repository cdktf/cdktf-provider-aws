# `prometheusAlertManagerDefinition` Submodule <a name="`prometheusAlertManagerDefinition` Submodule" id="@cdktf/provider-aws.prometheusAlertManagerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusAlertManagerDefinition <a name="PrometheusAlertManagerDefinition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition aws_prometheus_alert_manager_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_alert_manager_definition.PrometheusAlertManagerDefinition;

PrometheusAlertManagerDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .definition(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.definition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#region PrometheusAlertManagerDefinition#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusAlertManagerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_alert_manager_definition.PrometheusAlertManagerDefinition;

PrometheusAlertManagerDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_alert_manager_definition.PrometheusAlertManagerDefinition;

PrometheusAlertManagerDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_alert_manager_definition.PrometheusAlertManagerDefinition;

PrometheusAlertManagerDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_alert_manager_definition.PrometheusAlertManagerDefinition;

PrometheusAlertManagerDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrometheusAlertManagerDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrometheusAlertManagerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrometheusAlertManagerDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrometheusAlertManagerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusAlertManagerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusAlertManagerDefinitionConfig <a name="PrometheusAlertManagerDefinitionConfig" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_alert_manager_definition.PrometheusAlertManagerDefinitionConfig;

PrometheusAlertManagerDefinitionConfig.builder()
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
    .definition(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/prometheus_alert_manager_definition#region PrometheusAlertManagerDefinition#region}

---



